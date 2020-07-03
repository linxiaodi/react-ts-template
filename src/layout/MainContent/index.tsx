import React from 'react'
import { Layout, Menu } from 'antd'
import { Switch, useLocation, withRouter, RouteComponentProps } from 'react-router-dom'
import { renderAllRoutes } from '@routes/route-loader'
import SiderBar from '../SiderBar'
const { Content } = Layout
type RouterProps = RouteComponentProps<any>

type propsType = {
    routes?: any
} & RouterProps
function MainContent(props: propsType) {
    const isHome = props.location.pathname === '/home'
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
export default MainContent
