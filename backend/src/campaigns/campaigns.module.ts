import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './campaigns.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }])
  ],
  providers: [CampaignsService],
  controllers: [CampaignsController]
})
export class CampaignsModule { }
