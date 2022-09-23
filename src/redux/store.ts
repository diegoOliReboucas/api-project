import {configureStore} from '@reduxjs/toolkit'
import themeReducer from './reducers/themeReducer'


export const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

export type rootState = ReturnType<typeof store.getState>