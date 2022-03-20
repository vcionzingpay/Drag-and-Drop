import React from "react";
import styled from "styled-components";
const Container = styled.div`
  position: fixed;
  height: 15vh;
  flex: 0 80%;
  display: flex;
  width: 100%;
  bottom: 0;
  border-top: 1px solid black;
  z-index: 1;
`;
export const RightBottom = () => {
  return <Container></Container>;
};
