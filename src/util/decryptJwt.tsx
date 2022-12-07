import { IUser } from 'common/types/user.interface';
import jwtDecode from 'jwt-decode';

export function decryptJwt(token: string): IUser {
  const decodedUser: IUser = jwtDecode<IUser>(token);
  const user: IUser = {
    id: decodedUser.id,
    email: decodedUser.email,
    firstName: decodedUser.firstName,
    permissionLevel: decodedUser.permissionLevel,
    cart: decodedUser?.cart,
    messages: decodedUser.messages,
  };
  return user;
}
