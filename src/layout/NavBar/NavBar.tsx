import React, { Component } from 'react'
import styled from 'styled-components'
import NavLeft from './NavLeft'
type NavBarProps = {
    collapsed: boolean
    handleClick: Function
}
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`
const ContainerFlex = styled.div`
    display: flex;
`
class NavBar extends Component<NavBarProps> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <ContainerFlex>
                    <NavLeft {...this.props}></NavLeft>
                </ContainerFlex>
                <ContainerFlex></ContainerFlex>
            </Container>
        )
    }
}

export default NavBar
