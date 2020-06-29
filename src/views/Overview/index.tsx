import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

function Overview() {
    const history = useHistory()
    function click() {
        history.push('/home')
    }
    return <Button onClick={click}>Overview</Button>
}

export default Overview
