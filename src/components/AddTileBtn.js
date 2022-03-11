import React from 'react';
import styled from "styled-components";

const StyledAddTileBtn = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid greenyellow;
  border-radius: 5px;
  overflow: hidden;
`

const AddTileBtn = (props) => {
  return (
    <StyledAddTileBtn type="button" onClick={props.addTile}>
      +
    </StyledAddTileBtn>
  );
};

export default AddTileBtn;