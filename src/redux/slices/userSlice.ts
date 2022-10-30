import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from './../../components/API/'

interface IUserState {
  user: User
  statusUser: 'loading' | 'success' | 'error'
  userRepos: UserRepo[]
  statusRepos: 'loading' | 'success' | 'error'
  repoInfo: RepoInfo[]
  statusRepo: 'loading' | 'success' | 'error'
}

const initialState: IUserState = {
  statusUser: 'loading',
  user: {} as User,
  statusRepos: 'loading',
  userRepos: [] as UserRepo[],
  statusRepo: 'loading',
  repoInfo: [] as RepoInfo[],
}

export const fetchUserProfile = createAsyncThunk<User, userFilter>(
  'user/fetchUserProfile',
  async (params) => {
    const { userName } = params
    const { data } = await axiosInstance.get(`/users/${userName}`)
    return data
  }
)

export const fetchUserRepos = createAsyncThunk<UserRepo[], userFilter>(
  'user/fetchUserRepos',
  async (params) => {
    const { userName } = params
    const { data } = await axiosInstance.get(`/users/${userName}/repos`, {
      params: {
        per_page: 9999,
        page: 2,
      },
    })
    console.log(data)
    return data
  }
)

export const fetchRepo = createAsyncThunk<RepoInfo[], repoFilter>(
  'user/fetchRepo',
  async (params) => {
    const { userName, repoName } = params
    const { data } = await axiosInstance.get(
      `/repos/${userName}/${repoName}/commits`,
      {
        params: {
          per_page: 'all',
        },
      }
    )
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
    builder.addCase(fetchRepo.pending, (state) => {
      state.statusRepo = 'loading'
      state.repoInfo = [] as RepoInfo[]
    })

    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.statusUser = 'success'
      state.user = action.payload
    })
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.statusRepos = 'success'
      state.userRepos = action.payload
    })
    builder.addCase(fetchRepo.fulfilled, (state, action) => {
      state.statusRepo = 'loading'
      state.repoInfo = action.payload
    })

    builder.addCase(fetchUserProfile.rejected, (state) => {
      state.statusUser = 'error'
      state.user = {} as User
    })
    builder.addCase(fetchUserRepos.rejected, (state) => {
      state.statusRepos = 'error'
      state.userRepos = [] as UserRepo[]
    })
    builder.addCase(fetchRepo.rejected, (state) => {
      state.statusRepo = 'error'
      state.repoInfo = [] as RepoInfo[]
    })
  },
})

export default userSlice.reducer
