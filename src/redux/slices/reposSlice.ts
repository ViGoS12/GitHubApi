import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../services/API'

interface IReposState {
  userRepos: UserRepo[]
  status: 'loading' | 'success' | 'error'
}

const initialState: IReposState = {
  userRepos: [] as UserRepo[],
  status: 'loading',
}

export const fetchUserRepos = createAsyncThunk<UserRepo[], reposFilter>(
  'user/fetchUserRepos',
  async (params) => {
    const { userName, page, pagCount } = params
    const { data } = await axiosInstance.get(`/users/${userName}/repos`, {
      params: {
        per_page: pagCount,
        page: page,
      },
    })
    return data
  }
)
export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchUserRepos.pending, (state) => {
      state.status = 'loading'
      state.userRepos = [] as UserRepo[]
    })
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.status = 'success'
      state.userRepos = action.payload
    })
    builder.addCase(fetchUserRepos.rejected, (state) => {
      state.status = 'error'
      state.userRepos = [] as UserRepo[]
    })
  },
})

export default reposSlice.reducer
