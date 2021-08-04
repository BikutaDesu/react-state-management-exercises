import React, { useContext } from "react";
import styled from "styled-components";
import { SimpleContext } from "../state/FirstExample-SimpleContext";

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: gray;
  margin: auto;
`;

export default function FirstComponent(props) {
  // Modo sem hooks
  const [state] = useContext(SimpleContext);

  return (
    <Wrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
    </Wrapper>
  );
}
