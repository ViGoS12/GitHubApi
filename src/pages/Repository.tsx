import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { RootState, useAppDispatch } from '../redux/store'
import { useEffect } from 'react'
import { fetchRepo } from './../redux/slices/userSlice'

const Repository = () => {
  const navigate = useNavigate()
  const { userName, repoName } = useParams()

  const dispatch = useAppDispatch()
  const { repoInfo } = useSelector((state: RootState) => state.user)

  const goBack = () => navigate(-1)

  const getRepoInfo = () => {
    if (userName && repoName) {
      dispatch(fetchRepo({ userName, repoName }))
    }
  }

  useEffect(() => {
    getRepoInfo()
  }, [userName, repoName])

  return (
    <>
      <div>{repoName}</div>
      <button onClick={goBack}>Go back</button>
    </>
  )
}

export default Repository
