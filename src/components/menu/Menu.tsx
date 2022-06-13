import React, { useState, createContext } from 'react'
import { n } from '../../utils'
import { MenuItemProps } from './MenuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void
export interface MenuProps {
  defaultIndex?: string
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  defaultOpenSubMenus?: string[]
  onSelect?: SelectCallback
}

interface IMenuContext {
  index?: string
  onSelect?: SelectCallback
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}
export const MenuContext = createContext<IMenuContext>({ index: '0' })

export const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect,
    defaultOpenSubMenus,
    ...restProps
  } = props
  const [active, setActive] = useState(defaultIndex)
  const classes = n('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: active ? active : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index + '' })
      } else {
        console.error('[vikingship Warning]: Menu has a child which is not a MenuItem OR SubMenu component')
      }
    })
  }
  return (
    <ul className={classes} style={style} {...restProps}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu;