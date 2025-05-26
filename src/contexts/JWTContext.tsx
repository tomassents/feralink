import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { JWTContextType, ActionMap, AuthState, AuthUser } from "@/types/auth";

import axios from "@/utils/axios";
import { isValidToken, setSession } from "@/utils/jwt";
import userService from "@/services/userService";

// Note: If you're trying to connect JWT to your own backend, don't forget
// to remove the Axios mocks in the `/src/index.tsx` file.

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const SIGN_UP = "SIGN_UP";

type AuthActionTypes = {
  [INITIALIZE]: {
    isAuthenticated: boolean;
    user: AuthUser | null;
  };
  [SIGN_IN]: {
    user: AuthUser;
  };
  [SIGN_OUT]: undefined;
  [SIGN_UP]: {
    user: AuthUser;
  };
};

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const JWTReducer = (
  state: AuthState,
  action: ActionMap<AuthActionTypes>[keyof ActionMap<AuthActionTypes>]
) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SIGN_UP:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    const initialize = async () => {
      try {
        const token = window.localStorage.getItem("accessToken");

        if (token && isValidToken(token)) {
          setSession(token);

          // Fetch user data from the API
          const user = await userService.getMe();

          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });

          // Redirect based on role if we're on the login page
          if (window.location.pathname === '/auth/sign-in') {
            handleRedirect(user.Role.name);
          }
        } else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const handleRedirect = (role: string) => {
    const roleRoutes: { [key: string]: string } = {
      Admin: "/admin",
      Doctor: "/doctor",
      Client: "/client",
      Clinic: "/clinic",
    };

    const route = roleRoutes[role] || "/client";
    navigate(route);
  };

  const signIn = async (username: string, password: string) => {
    try {
      const response = await userService.login({ username, password });
      const { token } = response;

      setSession(token);
      
      // Fetch user data after successful login
      const user = await userService.getMe();

      dispatch({
        type: SIGN_IN,
        payload: {
          user,
        },
      });

      // Redirect based on role
      handleRedirect(user.Role.name);
    } catch (error) {
      console.error('Error during sign in:', error);
      throw error;
    }
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
    navigate('/auth/sign-in');
  };

  const signUp = async (
    username: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      // Register the user
      const response = await userService.register({
        username,
        password,
        user_type_id: 1, // Default to client type
        branch_id: 1, // Default to main branch
        role_id: 1, // Default to basic role
      });

      // Create personal info
      await axios.post("/api/personal-info", {
        user_id: response.id,
        first_name: firstName,
        last_name: lastName,
      });

      // Automatically sign in after successful registration
      await signIn(username, password);
    } catch (error) {
      console.error('Error during sign up:', error);
      throw error;
    }
  };

  const resetPassword = (username: string) => console.log(username);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        signIn,
        signOut,
        signUp,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
