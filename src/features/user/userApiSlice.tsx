import { apiSlice } from 'app/api/apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (formData) => ({
        url: '/users',
        method: 'POST',
        body: { ...formData },
      }),
    }),
  }),
});

export const { useSignupMutation } = userApiSlice;
