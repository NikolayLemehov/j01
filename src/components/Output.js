import React from 'react';
import styled from "styled-components";
import AdoptedGridRow from "./AdoptedGridRow";

const StyledOutput = styled.div`
  padding: 20px;
  background-color: lightgrey;
`

const Output = () => {
  return (
    <AdoptedGridRow>
      <StyledOutput>
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </StyledOutput>
    </AdoptedGridRow>
  );
};

export default Output;