import React, { Component, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'
import { CSSTransition } from 'react-transition-group'
import './index.css'
function Errors() {
    const history = useHistory()
    const [isShow, setIsShow] = useState(false)
    function click() {
        history.push('/home')
    }
    function text() {
        return 'test'
    }
    function handleClick() {
        setIsShow(!isShow)
        console.log(isShow)
    }
    return (
        <>
            <Button onClick={handleClick}>click</Button>
            <CSSTransition timeout={30000} classNames="alert" in={isShow}>
                <div>{isShow ? 'true' : 'false'}</div>
            </CSSTransition>
        </>
    )
}

export default Errors
