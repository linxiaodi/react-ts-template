import React from 'react'
import styled from 'styled-components'
const StyleImg = styled.img`
    margin: 0 20px;
`
function Logo() {
  console.log('render img')
  return <StyleImg src="http://www.webfunny.cn/website/src/assets/img/logo2.png" width="140" height="30"></StyleImg>
}
export default React.memo(Logo)