import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/userSlice'
import search from './slices/searchSlice'
import info from './slices/infoSlice'
import repo from './slices/repoSlice'
import repos from './slices/reposSlice'

export const store = configureStore({
  reducer: {
    user,
    repos,
    repo,
    search,
    info,
  },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
