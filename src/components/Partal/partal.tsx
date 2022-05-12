import React, { FC, ReactNode } from 'react'
import ReactDOM from 'react-dom'

const Partal: FC<{ children: ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.body
  )
}

export default Partal
