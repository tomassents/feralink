import React, { createContext, ReactNode, useEffect, useReducer } from "react";

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

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          // Obtener la información completa del usuario
          const user = await userService.getMe();

          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              user,
            },
          });
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

  const signIn = async (username: string, password: string) => {
    try {
      const response = await userService.login({ username, password });
      const { token } = response;

      setSession(token);
      
      // Obtener la información completa del usuario
      const user = await userService.getMe();

      dispatch({
        type: SIGN_IN,
        payload: {
          user,
        },
      });
    } catch (error) {
      console.error('Error during sign in:', error);
      throw error;
    }
  };

  const signOut = async () => {
    setSession(null);
    dispatch({ type: SIGN_OUT });
  };

  const signUp = async (
    username: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      // Primero registramos el usuario
      const response = await axios.post("/api/users/register", {
        username,
        password,
        user_type_id: 1, // Por defecto, tipo de usuario cliente
        branch_id: 1, // Por defecto, sucursal principal
        role_id: 1, // Por defecto, rol básico
      });
      
      // Luego creamos su información personal
      await axios.post("/api/personal-info", {
        user_id: response.data.id,
        first_name: firstName,
        last_name: lastName,
      });
      
      // Ahora hacemos login automáticamente
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
        user: state.user,
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
