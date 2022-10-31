import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../services/API'

interface IRepoState {
  repoInfo: RepoInfo[]
  status: 'loading' | 'success' | 'error'
}

const initialState: IRepoState = {
  status: 'loading',
  repoInfo: [] as RepoInfo[],
}

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

export const repoSlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchRepo.pending, (state) => {
      state.status = 'loading'
      state.repoInfo = [] as RepoInfo[]
    })
    builder.addCase(fetchRepo.fulfilled, (state, action) => {
      state.status = 'loading'
      state.repoInfo = action.payload
    })
    builder.addCase(fetchRepo.rejected, (state) => {
      state.status = 'error'
      state.repoInfo = [] as RepoInfo[]
    })
  },
})

export default repoSlice.reducer
