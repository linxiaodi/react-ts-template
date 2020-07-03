import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

function Error() {
    const history = useHistory()
    function click() {
        history.push('/home')
    }
    return <Button onClick={click}>Error</Button>
}

export default Error
