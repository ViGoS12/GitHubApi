import noData from '../../assets/svg/noData.svg'

const NotFound = () => {
  return (
    <div className='flex justify-center'>
      <div className='opacity-70'>
        <img src={noData} alt='' />
        <p className=''>User not found</p>
      </div>
    </div>
  )
}

export default NotFound
