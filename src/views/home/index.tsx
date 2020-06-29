import styles from './home.module.less'
import logo from '@assets/images/logo.svg'
import React from 'react'
import { renderAllRoutes } from '@routes/route-loader'
import { Switch, RouteComponentProps } from 'react-router-dom'

function mapStateToProps(state) {
    return state
}
/**
 * 路由参数 Props 类型声明
 */
interface RouterProps extends RouteComponentProps<any> {}

function Home(props) {
    return <div>home</div>
}

export default Home