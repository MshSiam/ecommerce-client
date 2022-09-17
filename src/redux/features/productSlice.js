import { createSlice } from "@reduxjs/toolkit"

import appApi from "../../services/appApi"

const initialState = []
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProducts: (_, actions) => {
      return actions.payload
    }
  }
})

export const { updateProducts } = productSlice.actions
export default productSlice.reducer
