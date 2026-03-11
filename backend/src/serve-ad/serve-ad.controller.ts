import { Body, Controller, Post, Query } from '@nestjs/common';
import { ServeAdService } from './serve-ad.service';

@Controller('serve-ad')
export class ServeAdController {


    constructor(private readonly serveAdService: ServeAdService) { }

    @Post()
    async serveAd(@Body('country') country: string) {
        return this.serveAdService.serveAd(country);
    }

}
