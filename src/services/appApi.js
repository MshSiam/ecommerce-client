import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shrouded-hollows-96088.herokuapp.com"
  }),
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
    // creating products
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        body: product,
        method: "POST"
      })
    }),
    // deleting products
    deleteProduct: builder.mutation({
      query: ({ product_id, user_id }) => ({
        url: `/products/${product_id}`,
        body: {
          user_id
        },
        method: "DELETE"
      })
    }),
    // update or edit products
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        body: product,
        method: "PATCH"
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
    }),
    // creating order
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
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
  useDecreaseCartProductsMutation,
  useCreateOrderMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = appApi
export default appApi
