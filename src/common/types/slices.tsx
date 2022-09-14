export interface ICredentialsLogin {
  email: string;
  password: string;
}

export interface ISignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

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
