import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import user from './slices/userSlice'

export const store = configureStore({
  reducer: { user },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
