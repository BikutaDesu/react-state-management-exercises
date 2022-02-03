import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react-lite'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: gray;
  margin: auto;
`
const FirstMobxComponent = observer(({ userState }) => {
  return (
    <Wrapper>
      <p>{userState.detail.name}</p>
      <p>{userState.detail.email}</p>
    </Wrapper>
  )
})

export default FirstMobxComponent
