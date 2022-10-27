const User = (props: User) => {
  return (
    <>
      <img src={props.avatar_url} alt='' />
      <div className='text-white'>{props.login + ' / ' + props.name}</div>
      <div></div>
    </>
  )
}

export default User
