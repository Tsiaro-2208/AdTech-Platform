import { Campaign, CampaignService } from "@/lib/campaigns.service";
import { useResource } from "./use-resource";

export const useCampaigns = (filter?: Record<string, any>) => useResource<Campaign>({
    queryKey: 'campaigns',
    service: new CampaignService(),
    filter
})