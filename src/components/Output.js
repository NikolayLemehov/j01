import React from 'react';
import styled from "styled-components";
import AdoptedGridRow from "./AdoptedGridRow";

const StyledOutput = styled.div`
  padding: 20px;
  background-color: lightgrey;
`

const Output = (props) => {
  return (
    <AdoptedGridRow>
      <StyledOutput>
        {props.text}
      </StyledOutput>
    </AdoptedGridRow>
  );
};

export default Output;