import React from 'react'
import App from '@/entry/App'
import BaseLayout from '@/layout/BaseLayout'
import SiderRoutes from './SiderRoutes'
export interface RouteConfigDeclaration {
    /**
     * 当前路由路径
     */
    path: string
    /**
     * 当前路由名称
     */
    name?: string
    /**
     * 是否严格匹配路由
     */
    exact?: boolean
    /**
     * 是否需要路由鉴权
     */
    isProtected?: boolean
    /**
     * 是否需要路由重定向
     */
    isRedirect?: boolean
    /**
     * 是否需要动态加载路由
     */
    isDynamic?: boolean
    /**
     * 动态加载路由时的提示文案
     */
    loadingFallback?: string
    /**
     * 路由组件
     */
    component: any
    /**
     * 子路由
     */
    routes?: RouteConfigDeclaration[]
    /**
     * 是否在侧边栏显示
     */
    isNotInMenu?: boolean
}

export const routesConfig: RouteConfigDeclaration[] = [
    {
        path: '/',
        name: 'root-route',
        component: App,
        routes: [
            {
                path: '/login',
                isDynamic: true,
                isRedirect: true,
                component: React.lazy(() =>
                    import(
                        /* webpackChunkName: "login" */
                        '@/views/login/Login'
                    ),
                ),
            },
            {
                path: '/register',
                isDynamic: true,
                component: React.lazy(() => import(/* webpackChunkName: "register"*/ '@/views/register/Register')),
            },
            {
                path: '/',
                component: BaseLayout,
                routes: SiderRoutes,
            },
        ],
    },
]
