import {
  createEntityAdapter,
  createSelector,
  EntityState,
} from '@reduxjs/toolkit';
import { apiSlice } from 'app/api/apiSlice';
import { TRootState } from 'app/store';
import { IProduct } from 'common/types/product.interface';

const productsAdapter = createEntityAdapter<IProduct>();

const initialState = productsAdapter.getInitialState();

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    list: builder.query<EntityState<IProduct>, void>({
      transformResponse: (responseData: Array<IProduct>) => {
        return productsAdapter.setAll(initialState, responseData);
      },
      query: () => '/products',
      providesTags: (result, error, arg) => [
        ...result.ids.map((id: string) => ({ type: 'Product' as const, id })),
        { type: 'Product', id: 'LIST' },
      ],
    }),
    //deleteById: builder.mutation({
    //transformResponse: (responseData, meta, arg) => {
    //return productsAdapter.removeOne(initialState, arg);
    //},
    //query: (productId) => ({
    //url: `/products/${productId}`,
    //method: 'DELETE',
    //}),
    //invalidatesTags: (result, error, arg) => [{ type: 'Product', id: arg }],
    //}),
  }),
});

export const { useListQuery } = productApiSlice;

// returns the query result object
export const selectProductsResult = productApiSlice.endpoints.list.select();

// Creates memoized selector
const selectProductsData = createSelector(
  selectProductsResult,
  (productsResult) => productsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  // Pass in a selector that returns the products slice of state
} = productsAdapter.getSelectors(
  (state: TRootState) => selectProductsData(state) ?? initialState
);
