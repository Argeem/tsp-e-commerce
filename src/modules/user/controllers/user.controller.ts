import { Body, Controller, Get, Param, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //@UseGuards(JwtAuthGuard)
  @Post('/user')
  saveUser(@Body() user: User): Promise<User>{
    return this.userService.create(user);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/users')
  getUsers(): Promise<User[]> {
    return this.userService.get();
  }
}