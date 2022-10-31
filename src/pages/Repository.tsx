import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../redux/store'

import { fetchRepo } from './../redux/slices/repoSlice'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import Table from './../components/table/'

import { THEADCOL_REPO } from '../constants'
import Button from '../shared/UI/button'

const Repository = () => {
  const navigate = useNavigate()
  const { userName, repoName } = useParams()

  const dispatch = useAppDispatch()
  const { repoInfo } = useSelector((state: RootState) => state.repo)

  const goBack = () => navigate(-1)

  const getRepoInfo = () => {
    if (userName && repoName) {
      dispatch(fetchRepo({ userName, repoName }))
    }
  }

  useEffect(() => {
    getRepoInfo()
  }, [userName, repoName])

  const formatDate = (date: Date) => {
    const myDate = new Date(Date.parse(date.toString()))
    return myDate.toLocaleString()
  }

  return (
    <>
      <div className='flex h-10 mx-5 mt-1'>
        <Button onClick={goBack}>Go back</Button>
      </div>
      <div className='mx-auto max-w-[1280px]'>
        <div className='flex flex-col gap-3'>
          <div className='text-lg'>Repository: {repoName}</div>
          <Table
            tHeadCol={THEADCOL_REPO}
            cnTHeadCol='text-sm font-medium  px-6 py-1 text-left'>
            {repoInfo.map(({ sha, commit }) => (
              <tr key={sha} className='border-solid border-b border-divider '>
                <td className='text-sm font-light px-6 py-2'>
                  {commit.author.name}
                </td>
                <td className='text-sm font-light px-6 py-2'>{sha}</td>
                <td className='text-sm font-light px-6 py-2'>
                  {formatDate(commit.author.date)}
                </td>
              </tr>
            ))}
          </Table>
        </div>
      </div>
    </>
  )
}

export default Repository
