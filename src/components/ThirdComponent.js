import React, { useContext } from "react";
import styled from "styled-components";
import { ComplexContext } from "../state/SecondExample-ComplexContext";

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  background-color: gray;
  margin: auto;
`;

export default function SecondComponent(props) {
  // Modo sem hooks
  const [state] = useContext(ComplexContext);

  return (
    <Wrapper>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
    </Wrapper>
  );
}
