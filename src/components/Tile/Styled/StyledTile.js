import styled from "styled-components";
import {TRANS_300} from "../../../variables";

export const StyledTile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  grid-column: sp an ${({isBig}) => isBig ? '2' : '1'};
  grid-row: span ${({isBig}) => isBig ? '2' : '1'};
  transition: box-shadow ${TRANS_300};

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  }
`
