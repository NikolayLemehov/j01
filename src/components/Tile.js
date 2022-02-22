import React from 'react';
import styled from "styled-components";

const StyledTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid greenyellow;
`

const Tile = (props) => {
  return (
    <StyledTile>
      {props.text}
    </StyledTile>
  );
};

export default Tile;