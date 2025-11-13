export interface IUser{
    name: string;
    surname: string;
    email: string;
    password?: string;
}

export interface IUserCredntials{   
    email: string;
    password: string;
}