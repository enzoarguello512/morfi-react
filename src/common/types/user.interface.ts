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

export interface IUserProfile {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  address: string;
  age: number;
  phoneNumber: string;
  imageId: string;
  imageUrl: string;
  permissionLevel: number;
  refreshToken?: Array<string>;
  cart?: ICart;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserFormData extends FormData, IUser {}
