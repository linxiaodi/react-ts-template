import { RouteConfigDeclaration } from './routes-config'
import React from 'react'
const SiderRoutes: RouteConfigDeclaration[] = [
    {
        path: '/overview',
        isDynamic: true,
        name: '概览',
        component: React.lazy(() => import(/* webpackChunkName: "Overview"*/ '@/views/Overview')),
    },
    {
        path: '/errors',
        // exact: true,
        isDynamic: true,
        name: '错误列表',
        component: React.lazy(() => import(/* webpackChunkName: "Errors"*/ '@/views/Errors')),
    },
    {
        path: '/home',
        isDynamic: true,
        isNotInMenu: true,
        component: React.lazy(() => import(/* webpackChunkName: "Home"*/ '@/views/Home')),
    },
]
// 获取侧边栏的菜单数据
export function getMenuData() {
    const menuData = JSON.parse(JSON.stringify(SiderRoutes))
    const recursion = (routes: RouteConfigDeclaration[]) => {
        routes.forEach((v, i) => {
            if (v.isNotInMenu) {
                routes.splice(i, 1)
            }
            if (v.routes) {
                recursion(v.routes)
            }
        })
    }
    recursion(menuData)
    return menuData
}

export default SiderRoutes
