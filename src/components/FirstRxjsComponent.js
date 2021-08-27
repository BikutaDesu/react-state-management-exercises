import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import userStore from '../state/FourthExample-Rxjs/store/user.store'
import { useUserStoreFacade } from '../state/FourthExample-Rxjs/hooks/user.store.hook'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: red;
  margin: auto;
`

export default function FirstComponent(props) {
  // WITHOUT HOOK
  // const [state, setState] = useState(userStore.initialState)

  // useEffect(() => {
  //   userStore.init()
  //   userStore.observe(setState)
  // }, [])

  //WITH HOOK
  const [state] = useUserStoreFacade()

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
    </Wrapper>
  )
}
