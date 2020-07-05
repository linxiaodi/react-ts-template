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
            <Button onClick={click}>Oveasdasdasasasdasdasdarview</Button>
            1231
            <div>1231asdaasdasdasdasdas奥术大师大奥所大所大所ds</div>
        </>
    )
}

export default Overview
