import React from 'react';
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  gap: 10px;
  justify-content: center;
`
const StyledGridInner = styled.div`
  grid-column-start: 1;
  grid-column-end: -1;
  min-height: 40px;
`

const AdoptedGridRow = (props) => {
  return (
    <StyledGrid>
      <StyledGridInner>
        {props.children}
      </StyledGridInner>
    </StyledGrid>
  );
};

export default AdoptedGridRow;