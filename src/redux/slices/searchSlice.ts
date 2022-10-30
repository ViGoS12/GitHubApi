import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISearchState {
  searchValue: string
}

const initialState: ISearchState = {
  searchValue: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state: ISearchState, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
  },
})

export const { setSearchValue } = searchSlice.actions

export default searchSlice.reducer
