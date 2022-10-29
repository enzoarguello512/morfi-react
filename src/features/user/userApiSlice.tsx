import { apiSlice } from 'app/api/apiSlice';
import { ICart } from 'common/types/cart.interface';
import { ICredentialToken } from 'common/types/credentials.req.interface';
import {
  IAddOrUpdateProduct,
  ICreateOrRead,
  ICredentialsLogin,
  IDeleteProduct,
  ISignupData,
} from 'common/types/slices';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ICredentialToken, ICredentialsLogin>({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'GET',
      }),
    }),
    signup: builder.mutation<{ id: string }, ISignupData>({
      query: (formData) => ({
        url: '/users',
        method: 'POST',
        body: { ...formData },
      }),
    }),
    refresh: builder.mutation<ICredentialToken, void>({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'GET',
      }),
    }),
    maybeAddToCart: builder.mutation<ICart, ICreateOrRead>({
      query: ({ userId, productId, quantity }) => ({
        url: `/cart/${userId}/${productId}/${quantity}`,
        method: 'POST',
      }),
    }),
    updateProductQty: builder.mutation<ICart, IAddOrUpdateProduct>({
      query: ({ cartId, productId, quantity }) => ({
        url: `/cart/${cartId}/products/${productId}/${quantity}`,
        method: 'POST',
      }),
    }),
    getCart: builder.query<ICart, string>({
      query: (cartId) => `/cart/${cartId}/products`,
    }),
    deleteCartProduct: builder.mutation<void, IDeleteProduct>({
      query: ({ cartId, productId }) => ({
        url: `/cart/${cartId}/products/${productId}`,
        method: 'DELETE',
      }),
    }),
    deleteCart: builder.mutation({
      query: (cartId) => ({
        url: `/cart/${cartId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useRefreshMutation,
  useMaybeAddToCartMutation,
  useGetCartQuery,
  useDeleteCartProductMutation,
  useUpdateProductQtyMutation,
  useDeleteCartMutation,
} = userApiSlice;
