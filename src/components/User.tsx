const User = (props: User) => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <img className='w-fit ' src={props.avatar_url} alt='' />
      <div className='text-white'>{props.login + ' / ' + props.name}</div>
    </div>
  )
}

export default User
