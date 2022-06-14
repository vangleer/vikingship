import React, { FC, ReactNode, useState } from 'react'
import { n } from '../../utils'
import Icon from '../icon/Icon'
export interface AlertProps {
  type?: 'success' | 'info' | 'warning' | 'danger',
  message?: ReactNode,
  description?: ReactNode,
  closable?: boolean,
  onClose?: () => void
}
export const Alert: FC<AlertProps> = (props) => {
  const {
    type,
    message,
    description,
    closable,
    onClose,
    ...restProps
  } = props
  const [show, setShow] = useState(true)
  const classes = n('alert', `alert-${type}`)
  const handleClose = () => {
    setShow(false)
    onClose && onClose()
  }
  return (
    show && <div className={classes} {...restProps}>
      {message && <div className="alert-message">{message}</div>}
      {description && <div className="alert-description">{description}</div>}
      {closable && <div className="alert-close-icon" onClick={handleClose}><Icon icon="times" theme='secondary' /></div>}
    </div>
  )
}
Alert.defaultProps = {
  type: 'success',
  closable: false
}
export default Alert

