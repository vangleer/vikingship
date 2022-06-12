import React from 'react'
import { render, fireEvent, RenderResult, cleanup, wait } from '@testing-library/react'
import Menu, { MenuProps } from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'


const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test'
}
const testVerticalProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: ['4']
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props} data-testid="test-menu">
      <MenuItem index={'0'}>
        active
      </MenuItem>
      <MenuItem index={'1'} disabled>
        disabled
      </MenuItem>
      <MenuItem index={'2'}>
        xyz
      </MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          drop1
        </MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>
          opened1
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}
let wrapper: RenderResult, wrapper2: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement

const createStyleFile = () => {
  const cssFile: string = `
    .submenu {
      display: none;
    }
    .submenu.is-open {
      display:block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssFile
  return style
}
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('should render correct Menu and MenuItem on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(5)
    expect(activeElement).toHaveClass('is-active')
    expect(disabledElement).toHaveClass('is-disabled')
  })
  it('click items should change active and call the right callback', () => {
    const thirdElement = wrapper.getByText('xyz')
    fireEvent.click(thirdElement)
    expect(thirdElement).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
  })
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup()
    const wrapper = render(generateMenu(testVerticalProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })

  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible()
    const dropdownElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible()
    })
  })
})

describe('test Menu and MenuItem component in vertical mode', () => {
  beforeEach(() => {
    wrapper2 = render(generateMenu(testVerticalProps))
    wrapper2.container.append(createStyleFile())
  })
  it('should render vertical mode when mode is set to vertical', () => {
    const menuElement = wrapper2.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('should show dropdown items when click on subMenu for vertical mode', () => {
    const dropDownItem = wrapper2.queryByText('drop1')
    expect(dropDownItem).not.toBeVisible()
    fireEvent.click(wrapper2.getByText('dropdown'))
    expect(dropDownItem).toBeVisible()
  })
  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    expect(wrapper2.queryByText('opened1')).toBeVisible()
  })
})