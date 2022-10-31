import { memo, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CleatButton from '../../assets/svg/clearButton.svg'
import Button from '../../shared/UI/button'

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
    if (e.key === 'Enter' && searchValue.length) {
      router(`/${searchValue}/repos`)
    }
  }

  const userLink = searchValue.length ? `/${searchValue}/repos` : ''

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
        <Button>
          <Link className='whitespace-nowrap text-base' to={userLink}>
            Get User
          </Link>
        </Button>
      </div>
    </>
  )
}

export default memo(Search)
