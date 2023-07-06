import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(input: User): Promise<User>{
    return await this.userRepository.save(input);
  }

  async get(): Promise<User[]>{
    return await this.userRepository.find();
  }

}