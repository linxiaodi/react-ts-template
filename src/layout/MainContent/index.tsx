import React from 'react'
import { Layout, Menu } from 'antd'
import { Switch, RouteComponentProps } from 'react-router-dom'
import { renderAllRoutes } from '@routes/route-loader'
import SiderBar from '../SiderBar'
import { CSSTransition } from 'react-transition-group'
import TransitionContainer from '@/components/TransitionContainer'
const { Content } = Layout
import './index.css'
type RouterProps = RouteComponentProps<any>

type propsType = {
    routes?: any
} & RouterProps
function MainContent(props: propsType) {
    const isHome = props.location.pathname === '/home'
    console.log(props)
    return isHome ? (
        <Content>
            <Switch>{renderAllRoutes(props.routes)}</Switch>
        </Content>
    ) : (
        <Layout>
            <SiderBar></SiderBar>
            <Content>
                {/* //todo tabsBar */}
                <TransitionContainer pageKey={props.location.key} duration={500} transition="alert">
                    <Switch>{renderAllRoutes(props.routes)}</Switch>
                </TransitionContainer>
            </Content>
        </Layout>
    )
}
export default MainContent
