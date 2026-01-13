import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User } from './auth.types'

const initialState: AuthState = {
  user: null,
  loading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload
      state.loading = false
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    logout(state) {
      state.user = null
    },
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions

export default authSlice.reducer
