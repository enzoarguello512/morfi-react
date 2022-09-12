import { apiSlice } from 'app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    signup: builder.mutation({
      query: (formData) => ({
        url: '/users',
        method: 'POST',
        body: { ...formData },
      }),
    }),
    refresh: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/refresh-token',
        method: 'POST',
      }),
    }),
    maybeAddToCart: builder.mutation({
      query: ({ userId, productId, quantity }) => ({
        url: `/cart/${userId}/${productId}/${quantity}`,
        method: 'POST',
      }),
    }),
    //addToCart: builder.mutation({
    //query: ({ cartId, productId, quantity }) => ({
    //url: `/cart/${cartId}/products/${productId}/${quantity}`,
    //method: 'POST',
    //}),
    //}),
    getCart: builder.query({
      query: (cartId) => `/cart/${cartId}/products`,
      providesTags: ['Cart'],
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
} = userApiSlice;
