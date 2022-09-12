import { IUser } from 'common/types/user.interface';
import jwtDecode, { JwtPayload } from 'jwt-decode';

export function decryptJwt(token: string): IUser {
  // @ts-ignore
  const decodedUser: IUser = jwtDecode<JwtPayload>(token);
  const user: IUser = {
    id: decodedUser.id,
    email: decodedUser.email,
    firstName: decodedUser.firstName,
    permissionLevel: decodedUser.permissionLevel,
    cart: decodedUser?.cart,
  };
  return user;
}
