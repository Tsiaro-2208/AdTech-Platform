import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from './campaigns.schema';
import { RedisService } from 'src/redis/redis.service';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
    RedisModule
  ],
  providers: [CampaignsService],
  controllers: [CampaignsController],
  exports: [MongooseModule]
})
export class CampaignsModule { }
