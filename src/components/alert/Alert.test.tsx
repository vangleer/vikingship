import React from 'react'
import { render } from '@testing-library/react'
import Alert from './Alert'

describe('test Alert component', () => {
  it('should render the correct Alert with props', () => {
    const type = 'success'
    const message = 'Success Text'
    const wrapper = render(<Alert type={type} message={message} data-testid="test-menu" />)
    const element = wrapper.getByTestId('test-menu')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass(`alert-${type}`)
  })
})