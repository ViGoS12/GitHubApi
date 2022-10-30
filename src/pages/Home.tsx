import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import Search from '../components/search'
import { setSearchValue } from '../redux/slices/searchSlice'
import { RootState, useAppDispatch } from '../redux/store'

const Home = () => {
  const dispatch = useAppDispatch()
  const { searchValue } = useSelector((state: RootState) => state.search)

  const clearSearchValue = () => {
    dispatch(setSearchValue(''))
  }

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(event.target.value))
    },
    []
  )

  return (
    <main className='h-full flex items-center justify-center w-6/12 mx-auto'>
      <Search
        searchValue={searchValue}
        changeInput={onChangeInput}
        clearSearchValue={clearSearchValue}
      />
    </main>
  )
}

export default Home
