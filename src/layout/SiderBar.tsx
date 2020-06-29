import React from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import {getMenuData} from '@/routes/SiderRoutes'
import { RootState, RootDispatch } from '@/store'
import { connect } from 'react-redux'
const { Sider } = Layout

function mapStateToProps(state: RootState) {
    const {
        global: { tags, isSiderCollapsed },
    } = state
    return { tags, isSiderCollapsed }
}
function mapDispatchToProps(dispatch: RootDispatch) {
    const {
        global: { ADD_NAV_TAG },
    } = dispatch
    return { ADD_NAV_TAG }
}
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>
type SiderBarProps = MapStateFromStoreProps & ComponentDispatchProps
function SiderBar(props: SiderBarProps) {
    const history = useHistory()
    const currentPathname = history.location.pathname
    function handlerClickMenu({ key, item }) {
        if (currentPathname !== key) {
            history.push(key)
            props.ADD_NAV_TAG({
                title: item.node.title,
                key,
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
        <Sider theme="light" trigger={null} collapsible collapsed={props.isSiderCollapsed}>
            <Menu onClick={handlerClickMenu} mode="inline" selectedKeys={[currentPathname]}>
                {renderMenu(getMenuData())}
            </Menu>
        </Sider>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SiderBar)
