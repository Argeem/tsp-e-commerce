import { Module } from '@nestjs/common';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ]),
      ],
      controllers: [UserController],
      providers: [UserService, UserRepository],
})
export class UserModule {}
