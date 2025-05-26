import firebase from "firebase/app";

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface PersonalInfo {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

export interface UserType {
  name: string;
  description: string;
}

export interface Role {
  name: string;
  description: string;
}

export interface Branch {
  name: string;
  address: string;
}

export interface AuthUser {
  id: number;
  username: string;
  is_active: boolean;
  user_type_id: number;
  branch_id: number;
  role_id: number;
  PersonalInfo: PersonalInfo;
  UserType: UserType;
  Role: Role;
  Branch: Branch;
}

export interface AuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser | null;
}

export type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser | null;
  method: 'jwt';
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (username: string, password: string, firstName: string, lastName: string) => Promise<void>;
  resetPassword: (username: string) => void;
};

export type FirebaseAuthContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: "firebase";
  signIn: (
    username: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  signUp: (
    username: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  signInWithGoogle: () => Promise<firebase.auth.UserCredential>;
  signInWithFaceBook: () => Promise<firebase.auth.UserCredential>;
  signInWithTwitter: () => Promise<firebase.auth.UserCredential>;
  signOut: () => Promise<void>;
  resetPassword: (username: string) => Promise<void>;
};

export type Auth0ContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: "auth0";
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (username: string) => void;
};

export type CognitoContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: AuthUser;
  method: "cognito";
  signIn: (username: string, password: string) => Promise<unknown>;
  signUp: (
    username: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<unknown>;
  signOut: VoidFunction;
  resetPassword: (username: string) => void;
};
