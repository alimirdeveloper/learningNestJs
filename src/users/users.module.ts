import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './providers/users.service';

@Module({
  controllers: [UsersController],
  providers:[UsersService],
  exports:[UsersService],
  imports:[TypeOrmModule.forFeature([User])]
})
export class UsersModule {}
