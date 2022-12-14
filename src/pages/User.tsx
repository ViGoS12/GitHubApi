import { useEffect, useCallback } from 'react'

import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'
import { fetchUserProfile } from '../redux/slices/userSlice'
import { fetchUserRepos } from '../redux/slices/reposSlice'
import { setSearchValue } from '../redux/slices/searchSlice'
import { setPage } from '../redux/slices/infoSlice'

import { Link, useParams } from 'react-router-dom'

import Table from './../components/table/'
import Search from '../components/search'

import Pagination from '../shared/UI/pagination'

import { THEADCOL_USER } from '../constants'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NotFound from '../components/noFound'
import Loader from '../shared/UI/loader'

const User = () => {
  const { userName } = useParams()
  const dispatch = useAppDispatch()
  const { user, statusUser } = useSelector((state: RootState) => state.user)
  const { userRepos } = useSelector((state: RootState) => state.repos)
  const { searchValue } = useSelector((state: RootState) => state.search)
  const { page, pagCount, publicRepos } = useSelector(
    (state: RootState) => state.info
  )
  const totalPage = Math.ceil(publicRepos / pagCount)

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(event.target.value))
    },
    []
  )
  const clearSearchValue = () => {
    dispatch(setSearchValue(''))
  }

  const getUserProfileAndRepos = () => {
    if (userName) {
      dispatch(fetchUserProfile({ userName }))
      dispatch(fetchUserRepos({ userName, page, pagCount }))
    }
  }

  const handleChangePage = useCallback((page: number) => {
    dispatch(setPage(page))
  }, [])

  useEffect(() => {
    getUserProfileAndRepos()
  }, [userName, page, pagCount])

  useEffect(() => {
    if (statusUser === 'error') {
      toast.error('User not found. Try searching again')
    }
  }, [statusUser])

  return (
    <main className='flex flex-col gap-5  pt-[1.4rem]'>
      <div className='mx-auto lg:w-6/12'>
        <Search
          searchValue={searchValue}
          changeInput={onChangeInput}
          clearSearchValue={clearSearchValue}
        />
      </div>
      {statusUser === 'error' && <NotFound />}
      {statusUser === 'success' && (
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex flex-col lg:flex-row  gap-5 justify-around px-10'>
            <div className='flex flex-row lg:items-start items-center lg:flex-col  gap-4 text-center sticky h-fit'>
              <img
                className='lg:w-fit rounded-full w-[20%] '
                src={user.avatar_url}
                alt=''
              />

              <div className='flex flex-col text-start gap-1'>
                <div className='text-[#C0D1D9]'>{user.name}</div>
                <div className='text-[#8B949E]'>{user.login}</div>
              </div>
            </div>

            <div className='w-full h-auto'>
              <Table
                tHeadCol={THEADCOL_USER}
                cnTHeadCol='text-sm font-medium px-6 py-1 text-left'>
                {userRepos.map((repo) => (
                  <tr
                    key={repo.id}
                    className='border-solid border-b border-divider'>
                    <td className='text-sm font-light px-6 py-2'>
                      <Link
                        className=' hover:opacity-45'
                        to={`/${userName}/repos/${repo.name}`}>
                        {repo.name}
                      </Link>
                    </td>
                    <td className='text-sm font-light px-6 py-2'>
                      {repo.language}
                    </td>
                    <td className='text-sm font-light px-6 py-2'>
                      {repo.description}
                    </td>
                    <td className='text-sm font-light px-6 py-2'>
                      {repo.stargazers_count}
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
          {totalPage > 1 && (
            <Pagination totalPage={totalPage} onChange={handleChangePage} />
          )}
        </div>
      )}
    </main>
  )
}

export default User
