import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1em 0;
`;
export const ButtonStyled = styled.button`
  padding: 0.5em 2em;
  background-color: #f55e53;
  border: 1px solid transparent;
  color: white;
  &:hover {
    background-color: #b83d18;
  }
`;
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 0 20%;
  border: 1px solid black;
  background-color: #656565;
`;
export const IframeContainer = styled.div`
  padding: 1em;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #c9c9c9;
  }
`;
export const Details = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: white;
  text-align: center;
`;
export const Iframe = styled.iframe`
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
  background-color: white;
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 0 80%;
  z-index: -1;
  border: 1px solid black;
`;

export const DropHTML = styled.div`
  flex-direction: row;
  width: 50%;
`;
export const Holder = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid gray;
  width: 10rem;
  text-align: center;
`;
