import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignsModule } from './campaigns/campaigns.module';
import { ServeAdModule } from './serve-ad/serve-ad.module';
import { StatsModule } from './stats/stats.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('DATABASE_URL', 'mongodb://localhost:27017/adtech?authSource=admin'),
      }),
    }),
    CampaignsModule,
    ServeAdModule,
    StatsModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    
  ],
})
export class AppModule { }
