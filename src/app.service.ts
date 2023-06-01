import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  constructor(
    @InjectRedis() private readonly redis: Redis, // or // @InjectRedis(DEFAULT_REDIS_NAMESPACE) private readonly redis: Redis // @InjectCluster() private readonly redis: Cluster, // or // @InjectCluster(DEFAULT_CLUSTER_NAMESPACE) private readonly cluster: Cluster
  ) {}

  async get() {
    return await this.redis.get('zxe432');
  }

  async set() {
    return await this.redis.set('zxe432', new Date() + '', 'EX', 10 * 60);
  }

  getHello(): string {
    return 'Hello World!';
  }

  
}
