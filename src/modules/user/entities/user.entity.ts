import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'USER' })
export class User {
  @PrimaryColumn({
    name: 'USER_ID',
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  userId: string;

  @Column({ name: 'FIRSTNAME', type: 'varchar', length: 100, nullable: false })
  firstName: string;

  @Column({ name: 'LASTNAME', type: 'varchar', length: 100, nullable: false })
  lastName: string;

  @Column({
    name: 'AGE',
    type: 'numeric',
    precision: 4,
    scale: 0,
    nullable: false,
  })
  age: number;
}
