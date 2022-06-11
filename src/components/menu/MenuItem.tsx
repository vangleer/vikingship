import React, { useContext } from 'react'
import { n } from '../../utils'
import { MenuContext } from './Menu'
export interface MenuItemProps {
  index: number
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    index,
    className,
    disabled,
    style,
    children
  } = props
  const context = useContext(MenuContext)
  const classes = n('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

export default MenuItem