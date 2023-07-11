import { UserRepository } from './user.repository';
import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  async createUser(input: User): Promise<User>{
    return await this.userRepository.create(input);
  }

  async getAll(): Promise<User[]>{
    return await this.userRepository.getAll();  
  }

  async getOne(id: number): Promise<User | null>{
    return await this.userRepository.getOne(id);
  }

  async getFullName(id:number): Promise<string> {
    const name = await this.userRepository.getName(id)
    const lastName = await this.userRepository.getLastName(id)
    return `Name : ${name} LastName : ${lastName}`
  }

}