import React from 'react'
import { Layout, Menu } from 'antd'
import { Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import NavBar from './NavBar/NavBar'
import { renderAllRoutes } from '@routes/route-loader'
import SiderBar from './SiderBar'
const { Header, Sider, Content } = Layout
const HeaderStyle = styled(Header)`
    background-color: white;
    padding: 0;
    height: 50px;
`
const ContentStyle = styled.div`
    display: flex;
    width: 100%;
`
type BaseLayoutProps = {
    routes?: any
}
export default class BaseLayout extends React.Component<BaseLayoutProps> {
    state = {
        collapsed: false,
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }
    handlerClickMenu({ item, key, keyPath, domEvent }) {
        console.log({ item, key, keyPath, domEvent })
    }

    render() {
        console.log(this.props)
        const CollapseContent = React.createContext({
            collapsed: this.state.collapsed,
        })
        return (
            <Layout style={{ height: '100%' }}>
                {/* <CollapseContent.Provider></CollapseContent.Provider> */}
                <Layout>
                    <HeaderStyle>
                        <NavBar collapsed={this.state.collapsed} handleClick={this.toggle}></NavBar>
                    </HeaderStyle>
                    <Layout>
                        <SiderBar collapsed={this.state.collapsed}></SiderBar>
                        <Content>
                            {/* //todo tabsBar */}
                            <Switch>{renderAllRoutes(this.props.routes)}</Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
