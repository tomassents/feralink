import axios from "@/utils/axios";

export interface PersonalInfo {
  id: number;
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  birth_date?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreatePersonalInfoData {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  birth_date?: string;
}

class PersonalInfoService {
  async create(data: CreatePersonalInfoData): Promise<PersonalInfo> {
    const response = await axios.post<PersonalInfo>("/api/personal-info/", data);
    return response.data;
  }

  async getAll(): Promise<PersonalInfo[]> {
    const response = await axios.get<PersonalInfo[]>("/api/personal-info/");
    return response.data;
  }

  async getById(id: number): Promise<PersonalInfo> {
    const response = await axios.get<PersonalInfo>(`/api/personal-info/${id}`);
    return response.data;
  }

  async getByUserId(userId: number): Promise<PersonalInfo | null> {
    try {
      const response = await axios.get<PersonalInfo[]>(`/api/personal-info/?user_id=${userId}`);
      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error('Error fetching personal info by user ID:', error);
      return null;
    }
  }

  async update(id: number, data: Partial<PersonalInfo>): Promise<PersonalInfo> {
    const response = await axios.put<PersonalInfo>(`/api/personal-info/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`/api/personal-info/${id}`);
  }
}

export default new PersonalInfoService(); 