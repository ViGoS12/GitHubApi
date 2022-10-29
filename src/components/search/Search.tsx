import { memo, useRef } from 'react'
import CleatButton from '../../assets/svg/clearButton.svg'

interface ISearchProps {
  searchValue: string
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearSearchValue: () => void
  getUser: () => void
}

const Search: React.FC<ISearchProps> = ({
  searchValue,
  changeInput,
  getUser,
  clearSearchValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickClear = () => {
    clearSearchValue()
    inputRef.current?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      getUser()
    }
  }

  return (
    <div className='relative flex h-11 border-solid border-[2px] border-secondary  bg-secondary rounded-[0.8rem] w-6/12 mx-auto  '>
      <input
        className='relative  px-2 text-[0.9rem] rounded-[0.8rem]  flex-auto bg-secondary'
        placeholder='Enter UserName'
        ref={inputRef}
        value={searchValue}
        onChange={changeInput}
        onKeyDown={onKeyDown}
        type='text'
      />
      {searchValue && (
        <div
          className='flex items-center content-center  p-2 cursor-pointer'
          onClick={onClickClear}>
          <img src={CleatButton} alt='' className='w-4 h-4 opacity-38 ' />
        </div>
      )}
      <button
        type='submit'
        className='text-black bg-yellowYa block px-[20px] rounded-[0.5rem] hover:opacity-90 transition-all my-[4px] mr-[4px] text-[0.9rem]'
        onClick={getUser}>
        Get User
      </button>
    </div>
  )
}

export default memo(Search)
