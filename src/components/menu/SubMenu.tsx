import React, { useContext, useState } from 'react'
import { n } from '../../utils'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'
import Transition from '../transition/Transition'
import Icon from '../icon/Icon'
export interface SubMenuProps {
  index?: string
  title?: string
  className?: string
}
const SubMenu: React.FC<SubMenuProps> = ({ index, title, className, children }) => {
  
  const context = useContext(MenuContext)
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false
  const [open, setOpen] = useState(isOpened)
  const classes = n('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-open': open,
    'is-vertical': context.mode === 'vertical'
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!open)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)
  }
  
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {}
  const renderChildren = () => {
    const subMenuClasses = n('submenu', {
      'is-open': open
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.error('[vikingship Warning]: Menu has a child which is not a MenuItem component')
      }
    })

    return (
      <Transition
        in={open}
        timeout={300}
        animation='zoom-in-top'
      >
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
      
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className='submenu-title' { ...clickEvents }>
        <div>{title}</div>
        <Icon icon='angle-down' className='arrow-icon' />
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu