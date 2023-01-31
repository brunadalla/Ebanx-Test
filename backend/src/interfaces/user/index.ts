export interface IUser {
    id: string
    name: string
    email: string
    password: string
    phone: string
    created_at: Date
}

export interface IUserCreate{
    name: string
    email: string
    password: string
    phone: string
}

export interface IUserLogin {
    email: string
    password: string
}

export type IUserUpdate ={
    name?: string
    password?: string
    phone?: string
}
