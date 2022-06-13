import React, { useContext } from 'react'
import { n } from '../../utils'
import { MenuContext } from './Menu'
export interface MenuItemProps {
  index?: string
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}
export const MenuItem: React.FC<MenuItemProps> = (props) => {
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
      context.onSelect(index as string)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem;