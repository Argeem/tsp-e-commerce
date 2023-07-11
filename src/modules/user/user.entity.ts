import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'numeric',
  })
  id: number;

  @Column({ 
    name: 'first-name', 
    type: 'text', 
    nullable: false 
    })
  firstName: string;

  @Column({ 
    name: 'last-name', 
    type: 'text', 
    nullable: false 
  })
  lastName: string;

  @Column({
    name: 'age',
    type: 'numeric',
    precision: 4,
    scale: 0,
    nullable: false,
  })
  age: number;
}
