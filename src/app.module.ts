import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
