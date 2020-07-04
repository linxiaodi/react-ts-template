import React from 'react'
import { RootState, RootDispatch } from '@/store'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CollapseDiv = styled.div`
    line-height: 50px;
    margin-left: 20px;
`
function mapStateToProps(state: RootState) {
    const {
        global: { isSiderCollapsed },
    } = state
    return { isSiderCollapsed }
}
function mapDispatchToProps(dispatch: RootDispatch) {
    const {
        global: { TOGGLE_COLLAPSED },
    } = dispatch
    return { TOGGLE_COLLAPSED }
}
type MapStateFromStoreProps = ReturnType<typeof mapStateToProps>
type ComponentDispatchProps = ReturnType<typeof mapDispatchToProps>
type propsType = MapStateFromStoreProps & ComponentDispatchProps
function SiderCollapsed(props: propsType) {
    const collapsed = React.createElement(props.isSiderCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        style: { fontSize: '18px' },
        onClick: () => props.TOGGLE_COLLAPSED(),
    })
    return <CollapseDiv>{collapsed}</CollapseDiv>
}

export default connect(mapStateToProps, mapDispatchToProps)(SiderCollapsed)
