import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import NavBar from './NavBar'
import MainContent from './MainContent'
const { Header, Content } = Layout
const HeaderStyle = styled(Header)`
    background-color: white;
    padding: 0;
    height: 50px;
`
function BaseLayout(props) {
    return (
        <Layout style={{ height: '100%' }}>
            <Layout>
                <HeaderStyle>
                    <NavBar></NavBar>
                </HeaderStyle>
                {/* 我只想更新MainContent组件，但是NavBar也会被重写渲染 */}
                <MainContent {...props}></MainContent>
            </Layout>
        </Layout>
    )
}

export default BaseLayout
