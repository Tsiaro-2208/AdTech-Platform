import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign } from 'src/campaigns/campaigns.schema';
import { Model } from 'mongoose';

@Injectable()
export class ServeAdService {

    constructor(
        @InjectModel(Campaign.name) private readonly campaignModel: Model<Campaign>
    ) { }

    async serveAd(country: string) {
        const campaign = await this.campaignModel.findOneAndUpdate(
            {
                targetCountries: { $in: [country] },
                status: 'active',
                startDate: { $lte: new Date() },
                endDate: { $gte: new Date() },
                $expr: { $lt: ['$impressionsServed', '$budget'] }
            },
            {
                $inc: { impressionsServed: 1 }
            },
            {
                returnDocument: 'after'
            }
        );

        return campaign;
    }
}
