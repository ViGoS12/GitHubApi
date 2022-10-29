import Table from './table'

interface IUserProps {
  userName: string
  user: User
  userRepos: UserRepo[]
}

const User: React.FC<IUserProps> = ({
  userName,
  user,
  userRepos,
  ...props
}) => {
  return (
    <div className='flex gap-5'>
      <div className='flex flex-col gap-4 text-center sticky h-fit'>
        <img className='w-fit rounded-[50%] ' src={user.avatar_url} alt='' />
        <div className='flex flex-col text-start gap-1'>
          <div className='text-[#C0D1D9]'>{user.name}</div>
          <div className='text-[#8B949E]'>{user.login}</div>
        </div>
      </div>
      <Table userRepos={userRepos} />
    </div>
  )
}

export default User
