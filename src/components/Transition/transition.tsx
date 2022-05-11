import React, { FC, ReactNode } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName,
  wrapper? : boolean,
  children: ReactNode
}

const Transition: FC<TransitionProps> = (props) => {
  const { animation, classNames ,children,wrapper, ...resetProps } = props
  return (
    <CSSTransition
      classNames={animation ? animation : classNames}
      {...resetProps}
    >
      <>{wrapper ? <div>{children}</div> : children}</>
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
