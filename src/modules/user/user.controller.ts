import { Body, Controller, Get, Post, Param  } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //@UseGuards(JwtAuthGuard)
  @Post()
  saveUser(@Body() user: User): Promise<User>{
    console.log(user)
    return this.userService.createUser(user);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  async getUsersAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getOne(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('/full-name/:id')
  async getFullName(@Param('id') id: number): Promise<string> {
    const fullName = await this.userService.getFullName(id);
    return fullName
  }
}