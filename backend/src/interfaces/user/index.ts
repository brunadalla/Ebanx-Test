export interface IUser {
    id: string
    name: string
    email: string
    password: string
    phone: string
}

export interface IUserLogin {
    email: string
    password: string
}

export type IUserCreate = Omit<IUser, "id">

export type IUserUpdate = Omit<IUserCreate, "email">

