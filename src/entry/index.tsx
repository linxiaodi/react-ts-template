/**
 * 样式
 */
import 'antd/dist/antd.css'
import '@styles/index.less'

/**
 * 第三方库
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
// import 'moment/locale/zh-cn';

/**
 * 自定义脚本
 */
import { routesConfig } from '@/routes/routes'
import { renderRoutes } from '@routes/route-loader'
import store from '@store/index'
import history from '@store/history'
import { Route, Switch } from 'react-router-dom'
import App from './App'

/**
 * 组件
 */
// import App from './App';

function renderApp() {
    ReactDOM.render(
        <ConfigProvider locale={zh_CN}>
            <Provider store={store}>
                {/* ConnectedRouter主要是用来链接route与redux，这样route的state就会在redux里面对应变换 */}
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path="/" component={App}></Route>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        </ConfigProvider>,
        document.getElementById('root'),
    )
}

renderApp()

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept()
    }
}
