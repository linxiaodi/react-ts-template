import React from 'react'
import { Layout, Menu } from 'antd'
import { Switch, RouteComponentProps } from 'react-router-dom'
import { renderAllRoutes } from '@routes/route-loader'
import SiderBar from '../SiderBar'
import { CSSTransition } from 'react-transition-group'
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
                <CSSTransition timeout={300}>
                    <Switch>{renderAllRoutes(props.routes)}</Switch>
                </CSSTransition>
            </Content>
        </Layout>
    )
}
export default MainContent
