import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RedisModule.forRoot({
      readyLog: true,
      commonOptions: {
        name: 'mymaster',
        sentinels: [
          {
            host: 'localhost',
            port: 26379,
          },
          {
            host: 'localhost',
            port: 26380,
          },
          {
            host: 'localhost',
            port: 26381,
          },
        ],
        sentinelPassword: '1234',
        password: '1234',
      },
      config: [
        {
          // get master node from the sentinel group
          role: 'master',
        }
      ],
    }),
    // ClusterModule.forRoot({
    //   config: {
    //     nodes: [{ host: 'localhost', port: 26379 },{ host: 'localhost', port: 26380 },{ host: 'localhost', port: 26381 }],
    //     redisOptions: { password: '1234' },
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
