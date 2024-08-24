import { configureStore } from '@reduxjs/toolkit'
import darkMode from "./slices"

export const store = configureStore({
  reducer: {
    darkModeState: darkMode

  },
})