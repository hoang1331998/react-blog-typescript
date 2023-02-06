import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  test: 1
}

const appReducer = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrentTopMenu: (state: any, action: any) => {
      state.currentTopMenu = action.payload
    }
  }
})

export const { setCurrentTopMenu } = appReducer.actions
export default appReducer.reducer
