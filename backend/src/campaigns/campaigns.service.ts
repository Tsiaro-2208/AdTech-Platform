import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign } from './campaigns.schema';
import { Model } from 'mongoose';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class CampaignsService {

    constructor(
        @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>,
        private readonly redisService : RedisService
    ) { }

    async createCampaign(campaign: Campaign): Promise<Campaign> {
        const createdCampaign = new this.campaignModel(campaign);
        return createdCampaign.save();
    }

    async getAllCampaigns(status?: string, advertiser?: string, country?: string): Promise<Campaign[]> {
        
        return this.redisService.getOrSet('campaigns:all',
            async () => {
                let query = this.campaignModel.find();
                if (status) {
                    query = query.where("status").equals(status);
                }
                if (advertiser) {
                    query = query.where("advertiser").equals(advertiser);
                }
                if (country) {
                    query = query.where("targetCountries").in([country]);
                }
                return query.exec();
            }
                
        )
    }

    async getCampaignById(id: string): Promise<Campaign | null> {

        return this.redisService.getOrSet(`campaigns:${id}`,
            async () => {
                return this.campaignModel.findOne({ id }).exec();
            }
        )
    }

    async updateCampaign(id: string, campaign: Campaign): Promise<Campaign | null> {
        return this.campaignModel.findOneAndUpdate({ id }, campaign, { new: true }).exec();
    }

    async deleteCampaign(id: string): Promise<Campaign | null> {
        return this.campaignModel.findOneAndDelete({ id }).exec();
    }

}
