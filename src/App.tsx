import React from 'react'
import Button from './components/button/Button'
const App: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
      <Button>Default</Button>
      <Button btnType='primary'>Primary</Button>
      <Button btnType='danger'>Danger</Button>
      <Button btnType='primary' disabled>Primary Disabled</Button>
      <Button btnType='link' href="http://www.baidu.com" target='_blank'>Link</Button>
      <Button btnType='link' href="http://www.baidu.com" disabled>Link Disabled</Button>
    </>
  )
}

export default App