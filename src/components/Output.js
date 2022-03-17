import React from 'react';
import styled from "styled-components";
import AdoptedGridRow from "./AdoptedGridRow";

const StyledOutput = styled.div`
  padding: 20px;
  min-height: 64px;
  background-color: lightgrey;
  direction: rtl;
  text-overflow: ellipsis;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
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