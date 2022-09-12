import { createSlice } from '@reduxjs/toolkit';
import { TRootState } from 'app/store';
import { IUserState } from 'common/types/user.interface';
import { decryptJwt } from 'util/decryptJwt';

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
      state.user = decryptJwt(accessToken);
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
    setCart: (state, action) => {
      state.user.cart = action.payload;
    },
  },
});

export const { setCredentials, logOut, setCart } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: TRootState) => state.user.user;
export const selectProducsInCart = (state: TRootState) =>
  state.user.user.cart.products;
export const selectCurrentToken = (state: TRootState) => state.user.token;
