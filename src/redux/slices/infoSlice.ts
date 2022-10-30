import { createSlice } from '@reduxjs/toolkit'
import { fetchUserProfile } from './userSlice'

interface IInfoState {
  page: number
  publicRepos: number
  pagCount: number
}

const initialState: IInfoState = {
  page: 1,
  publicRepos: 0,
  pagCount: 30,
}

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.publicRepos = action.payload.public_repos
    })
    builder.addCase(fetchUserProfile.rejected, (state) => {
      state.publicRepos = 0
    })
  },
})

export const { setPage } = infoSlice.actions

export default infoSlice.reducer
