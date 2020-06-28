import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory, matchPath } from 'react-router-dom'
import SiderRoutes from '@/routes/SiderRoutes'
import { RootState, RootDispatch } from '@/store'
import { connect } from 'react-redux'
const { Sider } = Layout

function mapStateToProps(state: RootState) {
    const {
        global: { tags },
    } = state
    return { tags }
}
function mapDispatchToProps(dispatch: RootDispatch) {
    const {
        global: { ADD_NAV_TAG },
    } = dispatch
    return { ADD_NAV_TAG }
}
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>
type SiderBarProps = {
    collapsed: boolean
} & MapStateFromStoreProps &
    ComponentDispatchProps
function SiderBar(props: SiderBarProps) {
    const history = useHistory()
    const [menuData, setMenuData] = useState(SiderRoutes)
    useEffect(() => {
        console.log('menuData', menuData)
    }, [menuData])
    function handlerClickMenu({ key, item }) {
        if (history.location.pathname !== key) {
            history.push(key)
            props.ADD_NAV_TAG({
                title: item.node.title,
                key
            })
        }
    }
    function renderMenu(menuData: any[]) {
        return menuData.map(item => {
            return (
                <Menu.Item key={item.path} title={item.name}>
                    {item.name}
                </Menu.Item>
            )
        })
    }
    return (
        <Sider theme="light" trigger={null} collapsible collapsed={props.collapsed}>
            <Menu onClick={handlerClickMenu} mode="inline" defaultOpenKeys={['1']}>
                {renderMenu(menuData)}
            </Menu>
        </Sider>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SiderBar)
 
