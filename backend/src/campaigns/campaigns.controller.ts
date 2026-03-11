import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './campaigns.schema';

@Controller('campaigns')
export class CampaignsController {
    constructor(private readonly campaignsService: CampaignsService) { }

    @Post()
    async createCampaign(@Body() campaign: Campaign): Promise<Campaign> {
        return this.campaignsService.createCampaign(campaign);
    }

    @Get()
    async getAllCampaigns(
        @Query('status') status?: string,
        @Query('advertiser') advertiser?: string,
        @Query('country') country?: string,
    ): Promise<Campaign[]> {
        return this.campaignsService.getAllCampaigns(status, advertiser, country);
    }

    @Get(':id')
    async getCampaignById(@Param('id') id: string): Promise<Campaign | null> {
        return this.campaignsService.getCampaignById(id);
    }

    @Put(':id')
    async updateCampaign(@Param('id') id: string, @Body() campaign: Campaign): Promise<Campaign | null> {
        return this.campaignsService.updateCampaign(id, campaign);
    }

    @Delete(':id')
    async deleteCampaign(@Param('id') id: string): Promise<Campaign | null> {
        return this.campaignsService.deleteCampaign(id);
    }
}
