export interface IContact {
    id: string
    name: string
    email?: string
    phone: string
    created_at: Date
}

export interface IContactRequest{
    name: string
    email: string
    phone: string
    userId: string
}

export interface IContactUpdate{
    name?: string
    email?: string
    phone?: string
}
