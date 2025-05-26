import axios from "@/utils/axios";

export interface Pet {
  id: number;
  owner_id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  created_at?: string;
  updated_at?: string;
}

export interface CreatePetData {
  owner_id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
}

class PetService {
  async create(data: CreatePetData): Promise<Pet> {
    const response = await axios.post<Pet>("/api/pets/", data);
    return response.data;
  }

  async getAll(): Promise<Pet[]> {
    const response = await axios.get<Pet[]>("/api/pets/");
    return response.data;
  }

  async getById(id: number): Promise<Pet> {
    const response = await axios.get<Pet>(`/api/pets/${id}`);
    return response.data;
  }

  async getByOwnerId(ownerId: number): Promise<Pet[]> {
    const response = await axios.get<Pet[]>(`/api/pets/?owner_id=${ownerId}`);
    return response.data;
  }

  async update(id: number, data: Partial<Pet>): Promise<Pet> {
    const response = await axios.put<Pet>(`/api/pets/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await axios.delete(`/api/pets/${id}`);
  }
}

export default new PetService(); 