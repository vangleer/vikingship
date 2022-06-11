import React, { useState, createContext } from 'react'
import { n } from '../../utils'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: number) => void
export interface MenuProps {
  defaultIndex?: number
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number,
  onSelect?: SelectCallback
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex,
    className,
    mode,
    style,
    children,
    onSelect,
    ...restProps
  } = props
  const [active, setActive] = useState(defaultIndex)
  const classes = n('menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: active ? active : 0,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style} {...restProps}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu