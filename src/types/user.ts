export type User = {
  id: string;
  email: string;
  password: string;
  displayName: string;
  avatar: string | null;
  role?: "admin" | "clinic" | "doctor" | "client";
};
