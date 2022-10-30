import { Link } from 'react-router-dom'

interface ITableProps {
  userName: string
  userRepos: UserRepo[]
}

const Table: React.FC<ITableProps> = ({ userName, userRepos }) => {
  console.log(userRepos)
  return (
    <table className=' '>
      <thead className=' border border-solid border-divider '>
        <tr>
          <th className='text-sm font-medium  px-6 py-1 text-left'>Name</th>
          <th className='text-sm font-medium  px-6 py-1 text-left'>
            Programming language
          </th>
          <th className='text-sm font-medium  px-6 py-1 text-left'>
            Description
          </th>
          <th className='text-sm font-medium  px-6 py-1 text-left'>Stars</th>
        </tr>
      </thead>
      <tbody>
        {userRepos.map((repo) => (
          <tr className='border border-solid border-divider' key={repo.id}>
            <td className='text-sm font-light px-6 py-2 '>
              <Link
                className=' hover:opacity-45'
                to={`/${userName}/repos/${repo.name}`}>
                {repo.name}
              </Link>
            </td>
            <td className=' text-sm font-light px-6 py-2'>{repo.language}</td>
            <td className=' text-sm font-light px-6 py-2'>
              {repo.description}
            </td>
            <td className=' text-sm font-light px-6 py-2 '>
              {repo.stargazers_count}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
