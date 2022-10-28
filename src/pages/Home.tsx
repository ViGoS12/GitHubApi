import { useSelector } from 'react-redux'
import { fetchUserProfile } from './../redux/slices/userSlice'
import { RootState, useAppDispatch } from './../redux/store'
import User from '../components/User'
import { useCallback, useState } from 'react'
import Search from '../components/search'

const Home = () => {
  const dispatch = useAppDispatch()

  const [userName, setUserName] = useState('')

  const clearSearchValue = () => {
    setUserName('')
  }

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value)
    },
    []
  )

  const { user } = useSelector((state: RootState) => state.user)

  const getUser = () => {
    dispatch(fetchUserProfile({ userName }))
  }

  return (
    <main className='mx-auto w-6/12 flex flex-col gap-5  '>
      <Search
        searchValue={userName}
        changeInput={onChangeInput}
        getUser={getUser}
        clearSearchValue={clearSearchValue}
      />

      {Object.keys(user).length && <User {...user} />}
    </main>
  )
}

export default Home
