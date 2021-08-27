import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: gray;
  margin: auto;
`

export default function SecondComponent(props) {
  const state = useSelector((state) => {
    return { ...state.user }
  })

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
    </Wrapper>
  )
}
