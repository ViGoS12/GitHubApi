import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from './../../components/API/'

interface IUserState {
  user: User
  status: 'loading' | 'success' | 'error'
}

const initialState: IUserState = {
  user: {} as User,
  status: 'loading',
}

export const fetchUserProfile = createAsyncThunk<User, Filter>(
  'user/fetchUserProfile',
  async (params) => {
    const { userName } = params
    const { data } = await axiosInstance.get(`/users/${userName}`)
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.pending, (state) => {
      state.status = 'loading'
      state.user = {} as User
    })
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.status = 'success'
      state.user = action.payload
    })
    builder.addCase(fetchUserProfile.rejected, (state) => {
      state.status = 'error'
      state.user = {} as User
    })
  },
})

export const {} = userSlice.actions

export default userSlice.reducer
