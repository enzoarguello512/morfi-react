import { ICart } from './cart.interface';

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  permissionLevel: number;
  cart?: ICart;
}

export interface IUserState {
  user: IUser | null;
  token: string;
}
