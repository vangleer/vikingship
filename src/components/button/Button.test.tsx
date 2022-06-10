import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')

  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
})

describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })

  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button btnType='primary' size='lg'>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-lg')
  })

  it('should render a link when btnType equals link and href is provided', () => {
    const href = 'http://www.baidu.com'
    const wrapper = render(<Button btnType='link' href={href}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-link')
    expect(element.getAttribute('href')).toBe(href)
  })

  it('should render disabled button when disabled set to be true', () => {
    const mockClick = jest.fn()
    const wrapper = render(<Button btnType='primary' disabled onClick={mockClick}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()

    fireEvent.click(element)
    expect(mockClick).not.toHaveBeenCalled()
  })
})