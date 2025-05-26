import axios from "@/utils/axios";

export interface Branch {
  id: number;
  name: string;
  address: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateBranchData {
  name: string;
  address: string;
}

class BranchService {
  async create(data: CreateBranchData): Promise<Branch> {
    const response = await axios.post<Branch>("/api/branches/", data);
    return response.data;
  }

  async getAll(): Promise<Branch[]> {
    const response = await axios.get<Branch[]>("/api/branches/");
    return response.data;
  }

  async getById(id: number): Promise<Branch> {
    const response = await axios.get<Branch>(`/api/branches/${id}`);
    return response.data;
  }

  async update(id: number, data: Partial<Branch>): Promise<Branch> {
    const response = await axios.put<Branch>(`/api/branches/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`/api/branches/${id}`);
  }
}

export default new BranchService(); 