import React from 'react'
import styled,{ ThemeProvider } from 'styled-components'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'
import Logo from '@/components/Logo'
const CollapseDiv = styled.div`
    line-height: 50px;
    margin-left: 20px;
`
const ContainerDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
    console.log('render left')
    return (
        <ContainerDiv>
            <Logo/>
            <CollapseDiv>{iconStatus(props.collapsed)}</CollapseDiv>
        </ContainerDiv>
    )
}

NavLeft.propTypes = {
    collapsed: PropTypes.bool,
    handleClick: PropTypes.func,
}
export default NavLeft
