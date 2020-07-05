import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import BaseLayout from './BaseLayout'
import Errors from '@/views/Errors'
import Overview from '@/views/Overview'
import { Layout } from 'antd'
import NavBar from './NavBar'
import SiderBar from './SiderBar'
import styled from 'styled-components'
import TransitionContainer from '@/components/TransitionContainer'
import './MainContent/index.css'
const { Header, Content } = Layout
const HeaderStyle = styled(Header)`
    background-color: white;
    padding: 0;
    height: 50px;
`
const TestContainer = () => {
    console.log('testContainer')
    const history = useHistory()

    return (
        <Layout style={{ height: '100%' }}>
            <Layout>
                <HeaderStyle>
                    <NavBar></NavBar>
                </HeaderStyle>
                <Layout>
                    <SiderBar></SiderBar>
                    <Content>
                        {/* //todo tabsBar */}
                        <TransitionContainer pageKey={history.location.key} duration={500} transition="main-content">
                            <div className="main-content">
                                <Switch>
                                    <Route path="/">
                                        <Route path="/errors" render={() => <Errors></Errors>}></Route>
                                        <Route path="/overview" render={() => <Overview></Overview>}></Route>
                                    </Route>
                                </Switch>
                            </div>
                        </TransitionContainer>
                    </Content>
                </Layout>
                {/* <Switch>
                        <Route path="/" component={BaseLayout}>
                            <Route path="/errors" component={Error}></Route>
                            <Route path="/errors" component={Overview}></Route>
                        </Route>
                    </Switch> */}
            </Layout>
        </Layout>
    )
}

export default TestContainer
