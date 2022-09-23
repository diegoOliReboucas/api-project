import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'theme',
  initialState: {
    color: 'purple'
  },
  reducers: {
    setThemeColor: (state, action) => {
      state.color = action.payload
    }
  }
})

export const {setThemeColor} = slice.actions;
export default slice.reducer