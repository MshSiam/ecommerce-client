import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (users) => ({
        url: "/users/signup",
        method: "POST",
        body: users
      })
    }),
    login: builder.mutation({
      query: (users) => ({
        url: "/users/login",
        method: "POST",
        body: users
      })
    }),
    // for products
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        body: product,
        method: "POST"
      })
    })
  })
})

export const { useSignupMutation, useLoginMutation, useCreateProductMutation } =
  appApi
export default appApi
