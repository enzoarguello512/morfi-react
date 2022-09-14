import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from 'app/store';
import { ICart } from 'common/types/cart.interface';
import { ICredentialToken } from 'common/types/credentials.req.interface';
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
    setCredentials: (state, action: PayloadAction<ICredentialToken>) => {
      const { accessToken } = action.payload;
      state.user = decryptJwt(accessToken);
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
    setCart: (state, action: PayloadAction<ICart>) => {
      state.user.cart = action.payload;
    },
    removeCartProduct: (state, action: PayloadAction<string>) => {
      const newProducts = state.user.cart.products.filter(
        (productData) => productData.data.id !== action.payload // product id
      );
      state.user.cart.products = newProducts;
    },
  },
});

export const { setCredentials, logOut, setCart, removeCartProduct } =
  userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state: TRootState) => state.user.user;
export const selectProducsInCart = (state: TRootState) =>
  state.user.user.cart.products;
export const selectCurrentToken = (state: TRootState) => state.user.token;
