import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("accounts")
export class Account {
  @Column({ primary: true, type: "varchar" })
  id: string

  @Column("int")
  balance: number
}
