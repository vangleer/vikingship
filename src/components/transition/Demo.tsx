import React, { useState } from 'react'
import Transition from './Transition'
import Button from '../button/Button'
const Demo: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Button btnType='primary' onClick={() => setShow(!show)}>toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation='zoom-in-left'
      >
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
        <p>Edit <code>src/App.tsx</code> and save to reload</p>
      </Transition>
    </>
  )
}

export default Demo