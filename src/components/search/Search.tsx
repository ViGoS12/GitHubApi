import { useRef } from 'react'

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
  return (
    <div className='relative flex h-11 border-solid border-1 border-yellow-300 bg-white rounded-[0.8rem]  '>
      <input
        className='relative  px-2 text-[0.9rem] rounded-[0.5rem]  flex-auto '
        placeholder='Enter UserName'
        ref={inputRef}
        value={searchValue}
        onChange={changeInput}
        type='text'
      />

      <button
        className='bg-yellowYa  px-2 rounded-[0.5rem] hover:opacity-90 transition-all m-1'
        onClick={getUser}>
        Get User
      </button>
    </div>
  )
}

export default Search
