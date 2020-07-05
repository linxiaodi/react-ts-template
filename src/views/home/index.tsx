import React from 'react'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import { Button } from 'antd'

function mapStateToProps(state) {
    return state
}

interface RouterProps extends RouteComponentProps<any> {}

function Home() {
    const history = useHistory()
    return (
        <div>
            home
            <Button onClick={() => history.push('/errors')}>去错误列表页面</Button>
        </div>
    )
}

export default Home
