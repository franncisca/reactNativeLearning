import { configureStore } from '@reduxjs/toolkit'
import basketReducer from "./features/basketSlice"
import restaurantReducer from "./features/restaurantSlice"


export const store = configureStore({
  reducer: {
    // connet basketreducer to the global sotre
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});