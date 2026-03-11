import axios from "axios"
import { BaseService } from "./base.service"
import { api } from "./api"

export type Stats = {
    totalCampaigns: number,
    activeCampaigns: number,
    totalImpressions: number,
    topAdvertiser: {
        _id: string
    }
}

export const getStats = async (): Promise<Stats> => {
    const response = await api.get(`/stats`)
    return response.data
}