import { Module } from '@nestjs/common';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { CampaignsModule } from 'src/campaigns/campaigns.module';

@Module({
  controllers: [StatsController],
  providers: [StatsService],
  imports: [CampaignsModule]
})
export class StatsModule { }
