import { Controller, Get } from '@nestjs/common';
import Redis from 'ioredis';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    // RedisModule.forRoot({
    //   readyLog: true,
    //   commonOptions: {
    //     name: 'redis-master',
    //     sentinels: [
    //       {
    //         host: 'localhost',
    //         port: 26379,
    //       },
    //     ],
    //     sentinelPassword: 'P@ssw0rd',
    //     password: 'P@ssw0rd',
    //   }
    // }),

    const redis = await new Redis({
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      // password: '1234',
      // db: 0, // Defaults to 0
    });

    // const redis = await new Redis({
    //   sentinels: [
    //     { host: 'localhost', port: 26379 },
    //     { host: 'localhost', port: 26380 },
    //     { host: 'localhost', port: 26381 },
    //   ],
    //   name: 'mymaster',
    //   sentinelPassword: '1234',
    //   password: '1234',
    // });

    // await redis.set('mykey', new Date() + '');

    return await redis.get('zxe432');
  }

  @Get('get')
  async get() {
    return await this.appService.get();
  }

  @Get('set')
  async set() {
    return await this.appService.set();
  }
}
