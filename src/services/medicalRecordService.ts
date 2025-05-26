import axios from "@/utils/axios";

export interface MedicalRecord {
  id: number;
  pet_id: number;
  branch_id: number;
  veterinarian_id: number;
  visit_date: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateMedicalRecordData {
  pet_id: number;
  branch_id: number;
  veterinarian_id: number;
  visit_date: string;
}

export interface Diagnosis {
  id: number;
  medical_record_id: number;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface Treatment {
  id: number;
  medical_record_id: number;
  description: string;
  created_at?: string;
  updated_at?: string;
}

class MedicalRecordService {
  // Medical Records
  async createMedicalRecord(data: CreateMedicalRecordData): Promise<MedicalRecord> {
    const response = await axios.post<MedicalRecord>("/api/medical-records/", data);
    return response.data;
  }

  async getAllMedicalRecords(): Promise<MedicalRecord[]> {
    const response = await axios.get<MedicalRecord[]>("/api/medical-records/");
    return response.data;
  }

  async getMedicalRecordById(id: number): Promise<MedicalRecord> {
    const response = await axios.get<MedicalRecord>(`/api/medical-records/${id}`);
    return response.data;
  }

  async getMedicalRecordsByPetId(petId: number): Promise<MedicalRecord[]> {
    const response = await axios.get<MedicalRecord[]>(`/api/medical-records/?pet_id=${petId}`);
    return response.data;
  }

  async updateMedicalRecord(id: number, data: Partial<MedicalRecord>): Promise<MedicalRecord> {
    const response = await axios.put<MedicalRecord>(`/api/medical-records/${id}`, data);
    return response.data;
  }

  async deleteMedicalRecord(id: number): Promise<void> {
    await axios.delete(`/api/medical-records/${id}`);
  }

  // Diagnoses
  async createDiagnosis(data: { medical_record_id: number; description: string }): Promise<Diagnosis> {
    const response = await axios.post<Diagnosis>("/api/diagnoses/", data);
    return response.data;
  }

  async getDiagnosesByMedicalRecordId(medicalRecordId: number): Promise<Diagnosis[]> {
    const response = await axios.get<Diagnosis[]>(`/api/diagnoses/?medical_record_id=${medicalRecordId}`);
    return response.data;
  }

  async updateDiagnosis(id: number, data: Partial<Diagnosis>): Promise<Diagnosis> {
    const response = await axios.put<Diagnosis>(`/api/diagnoses/${id}`, data);
    return response.data;
  }

  async deleteDiagnosis(id: number): Promise<void> {
    await axios.delete(`/api/diagnoses/${id}`);
  }

  // Treatments
  async createTreatment(data: { medical_record_id: number; description: string }): Promise<Treatment> {
    const response = await axios.post<Treatment>("/api/treatments/", data);
    return response.data;
  }

  async getTreatmentsByMedicalRecordId(medicalRecordId: number): Promise<Treatment[]> {
    const response = await axios.get<Treatment[]>(`/api/treatments/?medical_record_id=${medicalRecordId}`);
    return response.data;
  }

  async updateTreatment(id: number, data: Partial<Treatment>): Promise<Treatment> {
    const response = await axios.put<Treatment>(`/api/treatments/${id}`, data);
    return response.data;
  }

  async deleteTreatment(id: number): Promise<void> {
    await axios.delete(`/api/treatments/${id}`);
  }
}

export default new MedicalRecordService(); 