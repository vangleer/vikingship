import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
const Demo: React.FC = () => {
  return (
    <>
      <Menu defaultIndex={'0'} defaultOpenSubMenus={['2']} mode='vertical' data-testid="test-menu" onSelect={(index) => console.log(index)}>
        <MenuItem index={'0'}>
          cool link 1
        </MenuItem>
        <MenuItem index={'1'}>
          cool link 2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>
            dropdown 1
          </MenuItem>
          <MenuItem>
            dropdown 2
          </MenuItem>
        </SubMenu>
        <MenuItem index={'3'}>
          cool link 3
        </MenuItem>
      </Menu>
      {/* <Menu mode='vertical' defaultIndex={0} onSelect={(index) => console.log(index)}>
        <MenuItem index={0}>
          cool link 1
        </MenuItem>
        <MenuItem index={1} disabled>
          cool link 2
        </MenuItem>
        <MenuItem index={2}>
          cool link 3
        </MenuItem>
      </Menu> */}
    </>
  )
}

export default Demo