import { api } from "@/lib/api"
import qs from 'qs'

type ID = string | number

export class BaseService<T> {
  constructor(protected endpoint: string) { }

  async getAll(filter?: Record<string, any>): Promise<T[]> {
    const query = filter ? `?${qs.stringify(filter)}` : '';
    const res = await api.get<T[]>(`${this.endpoint}${query}`);
    return res.data;
  }

  async getOne(id: ID): Promise<T> {
    const res = await api.get<T>(`${this.endpoint}/${id}`)
    return res.data
  }

  async create(data: Partial<T>): Promise<T> {
    const res = await api.post<T>(this.endpoint, { ...data })
    return res.data
  }

  async update(id: ID, data: Partial<T>): Promise<T> {
    const res = await api.put<T>(`${this.endpoint}/${id}`, data)
    return res.data
  }

  async delete(id: ID): Promise<void> {
    await api.delete(`${this.endpoint}/${id}`)
  }

}