import { useSelector } from 'react-redux'
import { fetchUserProfile, fetchUserRepos } from './../redux/slices/userSlice'
import { RootState, useAppDispatch } from './../redux/store'

import { useCallback, useState, lazy, Suspense } from 'react'
import Search from '../components/search'

const User = lazy(() => import('../components/User'))

const Home = () => {
  const dispatch = useAppDispatch()

  const [userName, setUserName] = useState('')
  const { user, userRepos } = useSelector((state: RootState) => state.user)

  const clearSearchValue = () => {
    setUserName('')
  }

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value)
    },
    []
  )

  const getUserProfileAndRepos = () => {
    dispatch(fetchUserProfile({ userName }))
    dispatch(fetchUserRepos({ userName }))
  }

  return (
    <main className='mx-auto pl-[1.6rem] pr-[1.7rem] pt-[1.4rem]  flex flex-col gap-5 '>
      <Search
        searchValue={userName}
        changeInput={onChangeInput}
        getUser={getUserProfileAndRepos}
        clearSearchValue={clearSearchValue}
      />

      <Suspense fallback={<h1>Loading...</h1>}>
        {Object.keys(user).length && (
          <User userName={userName} user={user} userRepos={userRepos} />
        )}
      </Suspense>
    </main>
  )
}

export default Home
