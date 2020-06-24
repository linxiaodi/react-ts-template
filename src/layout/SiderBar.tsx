import React, { Component, useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory, matchPath } from 'react-router-dom'
import SiderRoutes from '@/routes/SiderRoutes'
const { Sider } = Layout
type propsType = {
    collapsed: boolean
}

function SiderBar(props: propsType) {
    const history = useHistory()
    const [menuData, setMenuData] = useState(SiderRoutes)
    useEffect(() => {
        console.log('menuData', menuData)
    }, [menuData])
    function handlerClickMenu({ key }) {
        if (history.location.pathname !== key) {
            history.push(key)
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

export default SiderBar
