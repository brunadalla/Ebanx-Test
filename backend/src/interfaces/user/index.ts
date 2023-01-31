export interface IUser {
    id: string
    name: string
    email: string
    password: string,
    phone: string
}

export type IUserCreate = Omit<IUser, "id">

export type IUserUpdate = Omit<IUserCreate, "email">

