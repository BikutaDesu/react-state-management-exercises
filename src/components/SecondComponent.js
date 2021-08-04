import React, { useState } from "react";
import styled from "styled-components";
import { useSimpleContextHook } from "../state/FirstExample-SimpleContext";

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: red;
  margin: auto;
`;

export default function SecondComponent(props) {
  // Modo com hooks
  const [state, setState] = useSimpleContextHook();

  const [newName, setNewName] = useState("");

  const changeName = () => {
    setState( oldState => {
      return {
        ...oldState,
        user:{
          ...oldState.user,
          name: newName
        }
      }
    });
    setNewName('');
  }

  return (
    <Wrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
      <input
        type='text'
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <button type="button" onClick={changeName}>Trocar nome</button>
    </Wrapper>
  );
}
