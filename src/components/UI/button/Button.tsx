import { memo, ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
}

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.className ||
        'text-black bg-yellowYa block px-[20px] rounded-[0.5rem] hover:opacity-90 transition-all my-[4px] mr-[4px] text-[0.9rem]'
      }>
      {children}
    </button>
  )
}

export default memo(Button)
