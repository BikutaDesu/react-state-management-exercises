import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUserStoreFacade } from "../state/FourthExample-Rxjs/hooks/user.store.hook";
// import userStore from "../state/FourthExample-Rxjs/store/user.store";

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: yellow;
  margin: auto;
`;

export default function SecondComponent(props) {
  
  // WITHOUT HOOK
  // const [state, setState] = useState(userStore.initialState)

  // const [newName, setNewName] = useState("");

  // useEffect(() => {
  //   userStore.init()
  //   userStore.observe(setState)
  // }, [])

  // const changeName = () => {
  //   userStore.userNameChange(newName)
  //   setNewName('');
  // }

  // WITH HOOK
  const [state, name, setName, changeName] = useUserStoreFacade();

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
      <input
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button type="button" onClick={() => changeName(name)}>Trocar nome</button>
    </Wrapper>
  );
}
