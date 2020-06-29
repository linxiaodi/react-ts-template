import { RouteConfigDeclaration } from './routes-config'
import React from 'react'
const SiderRoutes: RouteConfigDeclaration[] = [
    {
        path: '/overview',
        // exact: true,
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
        component: React.lazy(() => import(/* webpackChunkName: "Home"*/ '@/views/Home')),
    },
]

export default SiderRoutes
