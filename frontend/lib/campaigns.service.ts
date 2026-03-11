import { BaseService } from "./base.service";

export type Campaign = {
    id: string;
    name: string;
    advertiser: string;
    startDate: Date;
    endDate: Date;
    budget: number;
    impressionsServed: number;
    targetCountries: string[];
    status: 'active' | 'paused' | 'ended';
}

export class CampaignService extends BaseService<Campaign> {
    constructor() {
        super('/campaigns')
    }
}