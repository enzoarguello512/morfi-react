import { IProduct } from './product.interface';
import { IUser } from './user.interface';

export interface ICart {
  id: string;
  products: Array<IProduct>;
  user?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
}
