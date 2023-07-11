import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(input: User): Promise<User | null> {
    return await this.save(input);
  }

  async getAll(): Promise<User[]> {
    return await this.find();
  }

  async getOne(id: number): Promise<User | null> {
    return await this.findOneBy({ id });
  }

  async getName(id: number): Promise<string | undefined> {
    const user = await this.createQueryBuilder('user')
      .select('user.firstName')
      .where('user.id = :id', { id })
      .getOne();

    if (user) {
      return user.firstName;
    }
    return null;
  }

  async getLastName(id: number): Promise<string | undefined> {
    const user = await this.createQueryBuilder('user')
      .select('user.lastName')
      .where('user.id = :id', { id })
      .getOne();

    if (user) {
      return user.lastName;
    }
    return null;
  }
}
