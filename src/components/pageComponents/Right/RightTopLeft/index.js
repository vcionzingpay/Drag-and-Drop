import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MousePosition } from "../MousePosition";
const Container = styled.div`
  flex-direction: row;
  width: 50%;
  flex-direction: flex-start;
  padding-left: 1em;
  height: 100% - 15vh;
`;
const RightTopLeft = ({ html }) => {
  const [id, setid] = useState();
  useEffect(() => {
    if (html.includes("Button")) {
      return setid(1);
    }
    if (html.includes("Pharagraph")) {
      return setid(2);
    }
  }, [html]);
  return (
    <Container>
      <MousePosition />
      {html.length === 0 ? (
        <div>Nothing to display</div>
      ) : (
        <div>Config: {html}</div>
      )}
    </Container>
  );
};
export default RightTopLeft;
