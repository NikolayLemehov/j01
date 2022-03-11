import styled from "styled-components";

export const StyledTile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid greenyellow;
  border-radius: 5px;
  overflow: hidden;
  grid-column: span ${({isBig}) => isBig ? '2' : '1'};
  grid-row: span ${({isBig}) => isBig ? '2' : '1'};
`
