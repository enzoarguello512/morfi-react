import { apiSlice } from 'app/api/apiSlice';
import {
  IProduct,
  IProductFiltersResponse,
} from 'common/types/product.interface';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Product
    ///////////////////////////
    list: builder.query<IProductFiltersResponse, string>({
      query: (query) => `/products/filter${query}`,
    }),
    readById: builder.query<IProduct, string>({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useListQuery, useReadByIdQuery } = productApiSlice;
