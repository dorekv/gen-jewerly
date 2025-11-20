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

// ======= Methods (for now just for test purposes) =======
export function createUser(data: Partial<IUser>): IUser {
  return {
    name: data.name ?? '',
    surname: data.surname ?? '',
    email: data.email ?? '',
    password: data.password
  };
}

export function isValidEmail(user: IUser | IUserCredntials): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
}

export function hasPass(user: IUser | IUserCredntials): boolean {
  return !!user.password;
}

export function areSameUser(u1: IUser, u2: IUser): boolean {
  return u1.email === u2.email;
}