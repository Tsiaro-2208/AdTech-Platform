import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from 'src/campaigns/campaigns.schema';

@Injectable()
export class StatsService {

    constructor(@InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>) { }

    async getTotalCampaigns(): Promise<number> {
        return this.campaignModel.countDocuments();
    }

    async getActiveCampaigns(): Promise<number> {
        return this.campaignModel.countDocuments({
            status: 'active'
        });
    }

    async getTotalImpressions(): Promise<number> {
        const result = await this.campaignModel.aggregate([
            {
                $group: {
                    _id: null,
                    total: { $sum: "$impressionsServed" }
                }
            }
        ]);

        return result[0]?.total || 0;
    }

    async getTopAdvertiser() {
        const result = await this.campaignModel.aggregate([
            {
                $group: {
                    _id: "$advertiser"
                }
            },
            { $sort: { totalImpressions: -1 } },
            { $limit: 1 }
        ]);

        return result[0] || null;
    }

}
