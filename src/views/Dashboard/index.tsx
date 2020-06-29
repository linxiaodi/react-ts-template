import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

function Dashboard() {
        const history = useHistory()
        function click() {
            history.push('/home')
        }
    return <Button onClick={click}>dashboard</Button>
}

export default Dashboard
