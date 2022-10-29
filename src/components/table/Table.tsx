interface ITableProps {
  userRepos: UserRepo[]
}

const Table: React.FC<ITableProps> = ({ userRepos }) => {
  console.log(userRepos)
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Programming language</th>
          <th>Description</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        {userRepos.map((repo) => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.language}</td>
            <td>{repo.description}</td>
            <td>{repo.stargazers_count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
