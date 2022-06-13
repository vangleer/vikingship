import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Menu from './Menu'
import MenuItem from './MenuItem'

export const defaultMenu = () => (
  <Menu defaultIndex='0' onSelect={(index) => {action(`clicked ${index} item`)}} >
    <MenuItem>
      cool link
    </MenuItem>
    <MenuItem disabled>
      disabled
    </MenuItem> 
    <MenuItem>
      cool link 2
    </MenuItem> 
  </Menu>
)

storiesOf('Menu Component', module)
.add('Menu', defaultMenu )