import { useSelector } from 'react-redux'
import { fetchUserProfile } from './../redux/slices/userSlice'
import { RootState, useAppDispatch } from './../redux/store'
import User from '../components/User'
import { useCallback, useRef, useState } from 'react'

const Home = () => {
  const dispatch = useAppDispatch()

  const [userName, setUserName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

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
    <main className='mx-auto w-6/12 flex flex-col gap-5 content-center text-center '>
      <div className='relative flex h-11 border-solid border-1 border-yellow-300 bg-white rounded-[0.8rem]  '>
        <input
          className='relative  px-2 text-[0.9rem] rounded-[0.5rem]  flex-auto '
          placeholder='Enter UserName'
          ref={inputRef}
          value={userName}
          onChange={onChangeInput}
          type='text'
        />

        <button
          className='bg-yellowYa  px-2 rounded-[0.5rem] hover:opacity-90 transition-all m-1'
          onClick={() => getUser()}>
          Get User
        </button>
      </div>
      {Object.keys(user).length && <User {...user} />}
    </main>
  )
}

export default Home
