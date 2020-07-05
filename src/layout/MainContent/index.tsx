import React from 'react'
import { Layout, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { renderAllRoutes } from '@routes/route-loader'
import SiderBar from '../SiderBar'
import TransitionContainer from '@/components/TransitionContainer'
const { Content } = Layout
import './index.css'
import SiderRoutes from '@/routes/SiderRoutes'
function MainContent() {
    const location = useLocation()
    const isHome = location.pathname === '/home'
    const CommonContent = (
        <Content>
            {/* //todo tabsBar */}
            <TransitionContainer pageKey={location.key} duration={500} transition="main-content">
                <div className="main-content">{renderAllRoutes(SiderRoutes)}</div>
            </TransitionContainer>
        </Content>
    )
    return isHome ? (
        CommonContent
    ) : (
        <Layout>
            <SiderBar></SiderBar>
            {CommonContent}
        </Layout>
    )
}
export default MainContent
