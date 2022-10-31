import { IUserProfile } from './user.interface';

export interface ICredentialsLogin {
  email: string;
  password: string;
}

export interface ISignupData extends FormData, Partial<IUserProfile> {}

export interface ICreateOrRead {
  userId: string;
  productId: string;
  quantity: number;
}

export interface IAddOrUpdateProduct {
  cartId: string;
  productId: string;
  quantity: number;
}

export interface IDeleteProduct {
  cartId: string;
  productId: string;
}
