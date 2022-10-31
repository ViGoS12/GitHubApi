import { memo } from 'react'
import ReactPaginate from 'react-paginate'

interface IPaginationProps {
  onChange: (page: number) => void
  totalPage: number
}

const Pagination: React.FC<IPaginationProps> = ({ onChange, totalPage }) => {
  const mobile = window.innerWidth <= 768 ? true : false

  const handlePageClick = (data: { selected: number }) => {
    onChange(data.selected + 1)
  }

  return (
    <ReactPaginate
      pageCount={totalPage}
      previousLabel={'<'}
      nextLabel={'>'}
      onPageChange={handlePageClick}
      marginPagesDisplayed={mobile ? 1 : 2}
      pageRangeDisplayed={mobile ? 1 : 2}
      containerClassName='flex justify-center'
      pageClassName='rounded-[1rem] hover:opacity-50'
      pageLinkClassName='px-2'
      previousClassName='rounded-4 hover:opacity-50'
      previousLinkClassName='px-1 hover:opacity-50'
      nextClassName='rounded-[1rem] hover:opacity-50'
      nextLinkClassName='rounded-[1rem] hover:opacity-50'
      breakClassName='rounded-[1rem] hover:opacity-50'
      breakLinkClassName='rounded-[1rem] hover:opacity-50'
      activeClassName='bg-gray-500'
    />
  )
}

export default memo(Pagination)
