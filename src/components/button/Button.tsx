import React from 'react'
import { n } from '../../utils'
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string,
  /**设置 Button 的禁用 */
  disabled?: boolean,
  /**设置 Button 的尺寸 */
  size?: ButtonSize,
  /**设置 Button 的类型 */
  btnType?: ButtonType,
  href?: string,
  children?: React.ReactNode
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    className,
    size,
    href,
    children,
    ...restProps
  } = props

  const classes = n('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: (btnType === 'link') && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}
export default Button;