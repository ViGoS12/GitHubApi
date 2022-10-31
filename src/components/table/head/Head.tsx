interface IHeadProps {
  item: string
  className?: string
}

const Head: React.FC<IHeadProps> = ({ item, className }) => {
  return <th className={className}>{item}</th>
}

export default Head
