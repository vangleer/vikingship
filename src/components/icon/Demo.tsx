import React from 'react'
import Icon from './Icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const Demo: React.FC = () => {
  return (
    <>
      <Icon icon="check" theme='primary' size='10x' />
      <Icon icon="coffee" theme='danger' size='10x' />
    </>
  )
}

export default Demo