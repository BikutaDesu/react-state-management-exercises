import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch} from 'react-redux'
import { setNewUserName } from '../state/ThirdExample-Redux/actions/user/action'

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: lightgray;
  margin: auto;
`;

export default function SecondComponent(props) {
  
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return { ...state.user }
  })

  const [newName, setNewName] = useState("");

  const changeName = () => {
    dispatch(setNewUserName(newName))
    setNewName("");
  };

  return (
    <Wrapper>
      <p>{state.detail.name}</p>
      <p>{state.detail.email}</p>
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
