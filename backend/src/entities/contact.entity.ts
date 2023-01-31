import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm"
import { User } from "./user.entity"

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @ManyToOne(() => User, { eager: true })
  user: User
}
