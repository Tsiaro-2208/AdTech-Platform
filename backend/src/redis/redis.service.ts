import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
    constructor(
        @Inject('REDIS_CLIENT') private readonly redis: Redis
    ) { }

    async getOrSet<T>(
        key: string,
        callback: () => Promise<T>,
        ttl = 60
    ): Promise<T> {

        const cached = await this.redis.get(key)

        if (cached) {
            return JSON.parse(cached)
        }

        const data = await callback()

        await this.redis.set(
            key,
            JSON.stringify(data),
            'EX',
            ttl
        )

        return data
    }
}
