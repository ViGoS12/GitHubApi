import { memo, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CleatButton from '../../assets/svg/clearButton.svg'

interface ISearchProps {
  searchValue: string
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  clearSearchValue: () => void
}

const Search: React.FC<ISearchProps> = ({
  searchValue,
  changeInput,
  clearSearchValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useNavigate()

  const onClickClear = () => {
    clearSearchValue()
    inputRef.current?.focus()
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      router(`${searchValue}/repos`)
    }
  }

  return (
    <>
      <div className='w-full flex h-11 border-solid border-[2px] border-secondary  bg-secondary rounded-[0.8rem]   '>
        <input
          className='px-2 text-[0.9rem] rounded-[0.8rem] flex-auto bg-secondary w-full'
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
            <img
              src={CleatButton}
              alt=''
              className='min-w-[16px] min-h-[16px]  opacity-38 '
            />
          </div>
        )}
        <Link
          to={`/${searchValue}/repos`}
          className='text-black bg-yellowYa block px-[20px] rounded-[0.5rem] hover:opacity-90 transition-all my-[4px] mr-[4px] text-[0.9rem]'>
          Get User
        </Link>
      </div>
    </>
  )
}

export default memo(Search)
