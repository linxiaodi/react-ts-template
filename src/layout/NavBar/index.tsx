import React, { Component } from 'react'
import styled from 'styled-components'
import NavLeft from './components/NavLeft'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`
const ContainerFlex = styled.div`
    display: flex;
`
function NavBar() {
    return (
        <Container>
            <ContainerFlex>
                <NavLeft></NavLeft>
            </ContainerFlex>
            <ContainerFlex></ContainerFlex>
        </Container>
    )
}
export default React.memo(NavBar)
