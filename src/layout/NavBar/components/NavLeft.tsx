import React from 'react'
import styled from 'styled-components'
import Logo from '@/components/Logo'
import SiderCollapsed from './SiderCollapsed'
const ContainerDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

function NavLeft() {
    return (
        <ContainerDiv>
            <Logo />
            <SiderCollapsed></SiderCollapsed>
        </ContainerDiv>
    )
}

export default React.memo(NavLeft, () => false)
