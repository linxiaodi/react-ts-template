import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { Switch, Redirect, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar'
import { renderAllRoutes } from '@routes/route-loader'
import SiderBar from './SiderBar'
const { Header, Content } = Layout
const HeaderStyle = styled(Header)`
    background-color: white;
    padding: 0;
    height: 50px;
`
function BaseLayout(props) {
    const history = useHistory()
    console.log(history)
    function content() {
        const isHome = history.location.pathname === '/home'
        return isHome ? (
            <Content>
                <Switch>{renderAllRoutes(props.routes)}</Switch>
            </Content>
        ) : (
            <Layout>
                <SiderBar></SiderBar>
                <Content>
                    {/* //todo tabsBar */}
                    <Switch>{renderAllRoutes(props.routes)}</Switch>
                </Content>
            </Layout>
        )
    }
    return (
        <Layout style={{ height: '100%' }}>
            <Layout>
                <HeaderStyle>
                    <NavBar></NavBar>
                </HeaderStyle>
                {content()}
            </Layout>
        </Layout>
    )
}

export default BaseLayout
