import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

function Overview() {
    const history = useHistory()
    function click() {
        history.push('/home')
    }
    return (
        <>
            <div>当前是概览</div>
            <Button onClick={click}>跳转到Home</Button>
        </>
    )
}

export default Overview
