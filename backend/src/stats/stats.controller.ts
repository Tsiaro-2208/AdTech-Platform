import { Controller, Get } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {


    constructor(private readonly statsService : StatsService) {}

    @Get()
    async dashboard() {
        const [
            totalCampaigns,
            activeCampaigns,
            totalImpressions,
            topAdvertiser
        ] = await Promise.all([
            this.statsService.getTotalCampaigns(),
            this.statsService.getActiveCampaigns(),
            this.statsService.getTotalImpressions(),
            this.statsService.getTopAdvertiser()
        ]);

        return {
            totalCampaigns,
            activeCampaigns,
            totalImpressions,
            topAdvertiser
        };
    }

}
