
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Users", "Cohorts", "Attendance"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getAttendance: builder.query({
      query: () => "/attendance",
      providesTags: ["Attendance"],
    }),
    getCohorts: builder.query({
      query: () => "/cohorts",
      providesTags: ["Cohorts"],
    }),
    createCohort: builder.mutation({
      query: (cohort) => ({
        url: "/cohorts",
        method: "POST",
        body: cohort,
      }),
      invalidatesTags: ["Cohorts"],
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery, useGetAttendanceQuery, useGetCohortsQuery, useCreateCohortMutation, useCreateUserMutation } = apiSlice;