import './App.css'
import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import GlobalContext from '@common/global-context'
import { renderAllRoutes } from '@routes/route-loader'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
// import * as utils from "@/utils";

interface AppProps {
    routes?: any
}
class App extends React.PureComponent<AppProps> {
    globalContext

    constructor(props) {
        super(props)
        this.globalContext = {}
        NProgress.start()
    }

    componentWillUpdate() {
        NProgress.start()
    }

    componentDidUpdate() {
        NProgress.done()
    }

    componentWillUnmount(){
    }
    componentDidMount() {
        NProgress.done()
    }
    render() {
        const routes = renderAllRoutes(this.props.routes)
        return (
            <GlobalContext.Provider value={this.globalContext}>
                <Switch>{routes}</Switch>
            </GlobalContext.Provider>
        )
    }
}

export default App
