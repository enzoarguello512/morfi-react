import { createSlice } from '@reduxjs/toolkit';
import { TRootState } from 'app/store';
import { IUser, IUserState } from 'common/types/user.interface';
import jwtDecode, { JwtPayload } from 'jwt-decode';

const initialState: IUserState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      // @ts-ignore
      const decodedUser: IUser = jwtDecode<JwtPayload>(accessToken);
      const user: IUser = {
        email: decodedUser.email,
        firstName: decodedUser.firstName,
        permissionLevel: decodedUser.permissionLevel,
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

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: TRootState) => state.auth.user;
export const selectCurrentToken = (state: TRootState) => state.auth.token;
