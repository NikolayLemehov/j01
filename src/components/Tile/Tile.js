import React, {useState} from 'react';
import {StyledTile} from "./Styled/StyledTile";
import {StyledCloseBtn} from "./Styled/StyledCloseBtn";
import {StyledBlockBtn} from "./Styled/StyledBlockBtn";

const Tile = (props) => {
  const [isBig, setIsBig] = useState(false);
  const onClickBlockBtn = () => {
    setIsBig((prevState => !prevState))
  };
  const onClickCloseBtn = () => {
    props.removeTile(props)
  };
  return (
    <StyledTile isBig={isBig}>
      <StyledBlockBtn
        type="button"
        onClick={onClickBlockBtn}
      >
        {props.text}
      </StyledBlockBtn>
      <StyledCloseBtn
        type="button"
        onClick={onClickCloseBtn}
      >X</StyledCloseBtn>
    </StyledTile>
  );
};

export default Tile;