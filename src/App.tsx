import React from 'react'
import Button, { ButtonType } from './components/button/Button'
const App: React.FC = () => {
  return (
    <>
      <h1>Hello</h1>
      <Button>Default</Button>
      <Button type={ButtonType.Primary}>Primary</Button>
      <Button type={ButtonType.Primary} disabled>Primary Disabled</Button>
      <Button type={ButtonType.Link} href="http://www.baidu.com">Link</Button>
      <Button type={ButtonType.Link} href="http://www.baidu.com" disabled>Link Disabled</Button>
    </>
  )
}

export default App