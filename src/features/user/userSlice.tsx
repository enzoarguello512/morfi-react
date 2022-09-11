import { createSlice } from '@reduxjs/toolkit';
import { TRootState } from 'app/store';
import { IUser, IUserState } from 'common/types/user.interface';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const initialState: IUserState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      // @ts-ignore
      const decodedUser: IUser = jwtDecode<JwtPayload>(accessToken);
      const user: IUser = {
        id: decodedUser.id,
        email: decodedUser.email,
        firstName: decodedUser.firstName,
        permissionLevel: decodedUser.permissionLevel,
        cart: decodedUser?.cart,
      };
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: TRootState) => state.user.user;
export const selectCurrentToken = (state: TRootState) => state.user.token;
