import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
@Module({
  imports: [UsersModule, PostModule, TypeOrmModule.forRootAsync({
    useFactory: () => ({
      imports: [],
      inject: [],
      type: 'postgres',
      entities: [User],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: '1',
      host: 'localhost',
      database: 'nestjs-blog'
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
