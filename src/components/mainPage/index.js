import React, { useCallback, useState } from "react";
import RightTopLeft from "../pageComponents/Right/RightTopLeft";
import {
  ButtonStyled,
  ButtonWrapper,
  Container,
  Details,
  Iframe,
  IframeContainer,
  LeftContainer,
} from "./styles";
import RightTopRight from "../pageComponents/Right/RightTopRight";
import { RightBottom } from "../pageComponents/Right/RightBottom";
import { componentSlice } from "../../redux/reducer";
import { useDispatch } from "react-redux";
const navList = [
  {
    id: 1,
    name: "Save",
  },
  {
    id: 2,
    name: "Undo",
  },
  {
    id: 3,
    name: "Redo",
  },

  {
    id: 4,
    name: "Export",
  },
  {
    id: 5,
    name: "Import",
  },
  {
    id: 6,
    name: "View",
  },
];
const ItemList = [
  {
    name: "Button",
  },
  {
    name: "Pharagraph",
  },
];
export const MainPage = () => {
  const [droppedHTML, setDroppedHTML] = useState("");
  // const array = [];
  const dispatch = useDispatch();
  const handleHTMLDrop = useCallback(
    (item) => {
      console.log(item);
      if (item) {
        setDroppedHTML(item.html);
      }
    },
    [setDroppedHTML]
  );
  const handleOnClick = (tag) => {
    dispatch(
      componentSlice.actions.addFilter({
        id: Math.random(),
        type: tag,
      })
    );
  };
  return (
    <>
      <ButtonWrapper>
        {navList &&
          navList.map((item) => (
            <ButtonStyled key={item.id}>{item.name}</ButtonStyled>
          ))}
      </ButtonWrapper>

      <Container>
        <LeftContainer>
          {ItemList &&
            ItemList.map((item, index) => (
              <IframeContainer
                key={index}
                onClick={() => handleOnClick(item.name)}
              >
                <Iframe
                  srcDoc={`<img src='https://react-dnd.github.io/react-dnd/favicon-32x32.png' id=${item.name} /> `}
                />
                <Details>{item.name}</Details>
              </IframeContainer>
            ))}
        </LeftContainer>
        <RightTopLeft html={droppedHTML} />
        <RightTopRight onDrop={handleHTMLDrop} />
        <RightBottom />
      </Container>
    </>
  );
};
