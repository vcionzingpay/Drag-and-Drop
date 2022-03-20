import React from "react";
import styled from "styled-components";
import { RightBottom } from "./RightBottom";
import RightTopLeft from "./RightTopLeft";
import RightTopRight from "./RightTopRight";
import PropTypes from "prop-types";
const Container = styled.div`
  display: flex;
  flex: 0 80%;
  z-index: -1;
  border: 1px solid black;
`;
const RightComponent = (props) => {
  const { onDrop, html } = props;
  console.log(onDrop);
  console.log(html);
  return (
    <>
      <Container>
        <RightTopLeft htmlDisplay={html} />
        <RightTopRight onDrop={onDrop} />
      </Container>
      <RightBottom />
    </>
  );
};
RightComponent.propTypes = {
  onDrop: PropTypes.any,
  html: PropTypes.any,
};
export default RightComponent;
