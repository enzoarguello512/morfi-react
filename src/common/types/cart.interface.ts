import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface ICart {
  id: string;
  products: Array<ICartProduct>;
  user?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICartProduct {
  data: IProduct;
  quantity: number;
}
