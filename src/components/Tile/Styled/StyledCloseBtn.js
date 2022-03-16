import styled from "styled-components";
import {hexToRgbA} from "../../../utils";
import {TRANS_300} from "../../../variables";

export const StyledCloseBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #e02fff;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  transition: background-color ${TRANS_300};
  
  &:hover {
    background-color: ${hexToRgbA('#e02fff', 0.1)};
  }
`
