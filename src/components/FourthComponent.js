import React, { useState } from "react";
import styled from "styled-components";
import {
  useComplexContexHook,
} from "../state/SecondExample-ComplexContext";

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: lightgray;
  margin: auto;
`;

export default function SecondComponent(props) {
  // Modo com hooks
  const [state, dispatch] = useComplexContexHook();

  const [newName, setNewName] = useState("");

  const changeName = () => {

    const action = {
      type: 'CHANGE_NAME',
      payload: newName,
    }

    dispatch(action)
    setNewName("");
  };

  return (
    <Wrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
      <input
        type='text'
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <button type='button' onClick={changeName}>
        Trocar nome
      </button>
    </Wrapper>
  );
}
