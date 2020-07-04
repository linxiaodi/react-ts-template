import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// the childFactory allows to change the transition of the leaving component
// https://github.com/reactjs/react-transition-group/issues/182
const childFactoryCreator = props => child => {
    return React.cloneElement(child, props)
}
type propsType = {
    transition: string
    duration: number
    pageKey: any
    children: any
}
export default function Transition(props: propsType) {
    const { transition, duration, pageKey, children } = props
    return (
        <TransitionGroup childFactory={childFactoryCreator({ classNames: transition, timeout: duration })}>
            <CSSTransition classNames={transition} timeout={duration} key={pageKey}>
                <div>{children}</div>
            </CSSTransition>
        </TransitionGroup>
    )
}
Transition.defaultProps = {
    transition: '',
    duration: 0,
}
