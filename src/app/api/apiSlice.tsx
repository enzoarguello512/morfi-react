import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { TRootState } from 'app/store';
import { setCredentials, logOut } from 'features/user/userSlice';
import config from 'config';

let domain: string = config.BACKEND_DOMAIN;

if (process.env.NODE_ENV === 'development') {
  domain = `http://${config.BACKEND_DOMAIN}:${config.BACKEND_PORT}`;
}

const baseQuery = fetchBaseQuery({
  baseUrl: domain,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as TRootState).user.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  //@ts-ignore
  if (result?.error?.status === 403) {
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      '/auth/refresh-token',
      api,
      extraOptions
    );
    if (refreshResult.data) {
      // store the new token
      // @ts-ignore
      api.dispatch(setCredentials({ ...refreshResult.data }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery('/auth/logout', api, extraOptions);
      //@ts-ignore
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api', // optional
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Product', 'Cart'],
  endpoints: (builder) => ({}),
});
