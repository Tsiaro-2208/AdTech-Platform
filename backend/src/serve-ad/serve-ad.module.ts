import { Module } from '@nestjs/common';
import { ServeAdService } from './serve-ad.service';
import { ServeAdController } from './serve-ad.controller';
import { CampaignsModule } from 'src/campaigns/campaigns.module';

@Module({
  providers: [ServeAdService],
  controllers: [ServeAdController],
  imports: [CampaignsModule]
})
export class ServeAdModule { }
