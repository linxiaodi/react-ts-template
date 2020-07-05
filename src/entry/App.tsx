import './App.css'
import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import GlobalContext from '@common/global-context'
import { renderAllRoutes } from '@routes/route-loader'
import { connect } from 'react-redux'
import NProgress from 'nprogress'
import TestContainer from '@/layout/TestContainer'
// import * as utils from "@/utils";

interface AppProps {
    routes?: any
}
class App extends React.Component<AppProps> {
    globalContext

    constructor(props) {
        super(props)
        this.globalContext = {}
        NProgress.start()
    }
    shouldComponentUpdate(nextProps) {
        console.log('shouldComponentUpdate', nextProps, this.props !== nextProps)
        return this.props !== nextProps
    }
    componentDidUpdate() {
        NProgress.done()
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    componentDidMount() {
        NProgress.done()
    }
    render() {
        // const routes = renderAllRoutes(this.props.routes)
        // 更改换overview errors时，这个也会被重新渲染
        console.log('this.props.routes', this.props.routes)
        return (
            <GlobalContext.Provider value={this.globalContext}>
                <Switch>
                    <Route path="/" component={TestContainer}></Route>
                </Switch>
            </GlobalContext.Provider>
        )
    }
}

export default App
