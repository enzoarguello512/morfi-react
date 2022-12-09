import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRootState } from 'app/store';
import { IProduct, IProductState } from 'common/types/product.interface';

const initialState: IProductState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<IProduct>>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const selectAllProducts = (state: TRootState) => state.products.products;

export const selectProductById = (state: TRootState, id: string) =>
  state.products.products.find((product) => product.id === id);
