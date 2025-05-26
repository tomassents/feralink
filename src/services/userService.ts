import axios from "@/utils/axios";
import { AuthUser } from "@/types/auth";

export interface User {
  id: number;
  username: string;
  user_type_id: number;
  branch_id: number;
  role_id: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserRegistration {
  username: string;
  password: string;
  user_type_id: number;
  branch_id: number;
  role_id: number;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

class UserService {
  async register(data: UserRegistration): Promise<AuthUser> {
    const response = await axios.post<AuthUser>("/api/users/register", data);
    return response.data;
  }

  async login(data: UserLogin): Promise<LoginResponse> {
    const response = await axios.post<LoginResponse>("/api/users/login", data);
    return response.data;
  }

  async getMe(): Promise<AuthUser> {
    const response = await axios.get<AuthUser>("/api/users/me");
    return response.data;
  }

  async getAll(): Promise<AuthUser[]> {
    const response = await axios.get<AuthUser[]>("/api/users");
    return response.data;
  }

  async getById(id: number): Promise<AuthUser> {
    const response = await axios.get<AuthUser>(`/api/users/${id}`);
    return response.data;
  }

  async update(id: number, data: Partial<AuthUser>): Promise<AuthUser> {
    const response = await axios.put<AuthUser>(`/api/users/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`/api/users/${id}`);
  }
}

export default new UserService(); 