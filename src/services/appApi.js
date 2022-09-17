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
    }),
    // add to cart
    addToCart: builder.mutation({
      query: (cartInfo) => ({
        url: "/products/add-to-cart",
        body: cartInfo,
        method: "POST"
      })
    }),
    // remove from cart
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: "/products/remove-from-cart",
        body,
        method: "POST"
      })
    }),

    // increase cart
    increaseCartProduct: builder.mutation({
      query: (body) => ({
        url: "/products/increase-cart",
        body,
        method: "POST"
      })
    }),

    // remove from cart
    decreaseCartProducts: builder.mutation({
      query: (body) => ({
        url: "/products/decrease-cart",
        body: body,
        method: "POST"
      })
    })
  })
})

export const {
  useSignupMutation,
  useLoginMutation,
  useCreateProductMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useIncreaseCartProductMutation,
  useDecreaseCartProductsMutation
} = appApi
export default appApi
