import React from "react";
import styled from "styled-components";
import { NativeTypes } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
const Container = styled.div`
  flex-direction: row;
  width: 50%;
  height: 100% - 15vh;
`;
const Holder = styled.div`
  /* height: 100%; */
  width: 100%;
  border: 1px solid gray;
  width: 10rem;
  text-align: center;
`;
const RightTopRight = (props) => {
  const { onDrop } = props;

  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: [NativeTypes.HTML],
      drop(item) {
        if (onDrop) {
          onDrop(item);
        }
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [props]
  );
  const isActive = canDrop && isOver;
  return (
    <Container>
      <Holder ref={drop}>
        {isActive ? "Release to drop" : "Drag HTML here"}
      </Holder>
    </Container>
  );
};
export default RightTopRight;
