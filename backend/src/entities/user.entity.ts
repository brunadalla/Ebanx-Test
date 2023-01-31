import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm"
import { Exclude } from "class-transformer"
import { Contact } from "./contact.entity"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  @Exclude()
  password: string

  @Column()
  phone: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @OneToMany(() => Contact, contact => contact.user)
  contacts: Contact[]
}
