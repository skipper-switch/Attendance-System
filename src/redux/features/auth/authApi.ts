// features/auth/authApi.ts

import { apiSlice } from '../api/apiSlice';
import { User } from '@/types';

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<User, { name: string; email: string; password: string; role: string }>(
      {
        query: (credentials) => ({
          url: '/users',
          method: 'POST',
          body: {
            ...credentials,
            avatarInitials: credentials.name
              .split(' ')
              .map((n) => n[0])
              .join('')
              .toUpperCase(),
            cohortId: null,
            enrolledDate: null,
          },
        }),
      },
    ),

    // ✅ LOGIN (query user)
    login: builder.mutation<User[], { email: string; password: string }>({
    query: ({ email, password }) => ({
        url: `/users?email=${encodeURIComponent(
          email
        )}&password=${encodeURIComponent(password)}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApi;
