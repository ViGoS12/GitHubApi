interface ITableHeadProps {
  item: string
  className?: string
}

const TableHead: React.FC<ITableHeadProps> = ({ item, className }) => {
  return <th className={className}>{item}</th>
}

export default TableHead
