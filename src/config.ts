export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

export const auth0Config = {
  clientId: import.meta.env.VITE_APP_AUTH0_CLIENT_ID,
  domain: import.meta.env.VITE_APP_AUTH0_DOMAIN,
};

export const cognitoConfig = {
  userPoolId: import.meta.env.VITE_APP_COGNITO_USER_POOL_ID,
  clientId: import.meta.env.VITE_APP_COGNITO_CLIENT_ID,
};

// Configuración de la API de Feralink
export const apiConfig = {
  // En desarrollo usamos URLs relativas que serán manejadas por el proxy
  baseURL: '/api',
  timeout: 30000,
};

interface Config {
  api: {
    baseURL: string;
    timeout: number;
  };
  auth: {
    tokenKey: string;
    tokenPrefix: string;
  };
}

const config: Config = {
  api: {
    baseURL: 'https://apiferalink.onrender.com',
    timeout: 30000, // 30 segundos
  },
  auth: {
    tokenKey: 'accessToken',
    tokenPrefix: 'Bearer',
  }
};

export default config;
