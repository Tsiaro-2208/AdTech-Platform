import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import Redis from 'ioredis';

@Module({
  providers: [RedisService,
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        const client = new Redis({
          host: process.env.REDIS_HOST || 'localhost',
          port: parseInt(process.env.REDIS_PORT || '6379', 10),
        });
        client.on('error', (err) => {
          console.error('[ioredis] Unhandled error event:', err);
        });
        return client;
      },
    },
  ],
  exports: ['REDIS_CLIENT', RedisService],
})
export class RedisModule { }
