import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from './../../components/API/'

interface IUserState {
  user: User
  statusUser: 'loading' | 'success' | 'error'
  statusRepos: 'loading' | 'success' | 'error'
  userRepos: UserRepo[]
}

const initialState: IUserState = {
  user: {} as User,
  statusUser: 'loading',
  statusRepos: 'loading',
  userRepos: [] as UserRepo[],
}

export const fetchUserProfile = createAsyncThunk<User, Filter>(
  'user/fetchUserProfile',
  async (params) => {
    const { userName } = params
    const { data } = await axiosInstance.get(`/users/${userName}`)
    return data
  }
)

export const fetchUserRepos = createAsyncThunk<UserRepo[], Filter>(
  'user/fetchUserRepos',
  async (params) => {
    const { userName } = params
    const { data } = await axiosInstance.get(`/users/${userName}/repos`)
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
    builder.addCase(fetchUserRepos.pending, (state) => {
      state.statusRepos = 'loading'
      state.userRepos = [] as UserRepo[]
    })

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.statusUser = 'success'
      state.user = action.payload
    })
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.statusUser = 'success'
      state.userRepos = action.payload
    })

    builder.addCase(fetchUserProfile.rejected, (state) => {
      state.statusUser = 'error'
      state.user = {} as User
    })
    builder.addCase(fetchUserRepos.rejected, (state) => {
      state.statusUser = 'error'
      state.userRepos = [] as UserRepo[]
    })
  },
})

export const {} = userSlice.actions

export default userSlice.reducer
