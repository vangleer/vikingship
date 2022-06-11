import React from 'react'
import Button from './Button'
const Demo: React.FC = () => {
  return (
    <>
      <Button>Default</Button>
      <Button btnType='primary'>Primary</Button>
      <Button btnType='danger'>Danger</Button>
      <Button btnType='primary' disabled>Primary Disabled</Button>
      <Button btnType='link' href="http://www.baidu.com" target='_blank'>Link</Button>
      <Button btnType='link' href="http://www.baidu.com" disabled>Link Disabled</Button>
    </>
  )
}

export default Demo