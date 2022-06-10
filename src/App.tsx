import React from 'react'
import Button, { ButtonType } from './components/button/Button'
const App: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
      <Button>Default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Primary} disabled>Primary Disabled</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" target='_blank'>Link</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Link Disabled</Button>
    </>
  )
}

export default App