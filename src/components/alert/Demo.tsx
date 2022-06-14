import React from 'react'
import Alert from './Alert'

const Demo: React.FC = () => {
  return (
    <div>
      <Alert type="success" description="Success Description" message="Success Text" closable />
      <Alert type="info" message="info Text" />
      <Alert type="warning" message="warning Text" />
      <Alert type="danger" message="danger Text" />
    </div>
  )
}

export default Demo