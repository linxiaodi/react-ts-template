import React from 'react'
import styled from 'styled-components'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const CollapseDiv = styled.div`
    line-height: 50px;
    margin-left: 20px;
`
type propsType = {
    collapsed: boolean
    handleClick: Function
}
function NavLeft(props: propsType) {
    function iconStatus(collapsed: boolean) {
        return React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: { fontSize: '18px' },
            onClick: () => props.handleClick(),
        })
    }
    return <CollapseDiv>{iconStatus(props.collapsed)}</CollapseDiv>
}

NavLeft.propTypes = {
    collapsed: PropTypes.bool,
    handleClick: PropTypes.func,
}
export default NavLeft
