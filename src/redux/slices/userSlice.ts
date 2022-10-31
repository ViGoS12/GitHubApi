import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../services/API'

interface IUserState {
  user: User
  statusUser: 'loading' | 'success' | 'error'
}

const initialState: IUserState = {
  statusUser: 'loading',
  user: {} as User,
}

export const fetchUserProfile = createAsyncThunk<User, userFilter>(
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
      state.statusUser = 'loading'
      state.user = {} as User
    })

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.statusUser = 'success'
      state.user = action.payload
    })

    builder.addCase(fetchUserProfile.rejected, (state) => {
      state.statusUser = 'error'
      state.user = {} as User
    })
  },
})

export default userSlice.reducer
