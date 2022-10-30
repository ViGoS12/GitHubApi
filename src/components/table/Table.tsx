import TableHead from './tableHead'
import { ReactNode } from 'react'

interface ITableProps {
  tHeadCol: string[]
  cnTHeadCol?: string
  children: ReactNode
}

const Table: React.FC<ITableProps> = ({ tHeadCol, cnTHeadCol, children }) => {
  return (
    <table>
      <thead className=' border border-solid border-divider '>
        <tr>
          {tHeadCol.map((col) => {
            return (
              <TableHead
                key={col}
                item={col}
                className={cnTHeadCol}></TableHead>
            )
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export default Table
