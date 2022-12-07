import { ICart } from './cart.interface';
import { IMessage } from './message.interface';

export interface IUser {
  id: string;
  email: string;
  firstName: string;
  permissionLevel: number;
  cart: ICart;
  messages: Array<IMessage>;
}

export interface IUserState {
  user: IUser;
  token: string;
  loadingSession: boolean;
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
