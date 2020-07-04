import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

function mapStateToProps(state) {
    return state
}

interface RouterProps extends RouteComponentProps<any> {}

function Home(props) {
    return <div>home</div>
}

export default Home
