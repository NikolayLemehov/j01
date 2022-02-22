import React from 'react';
import Tile from "./Tile";
import styled from "styled-components";

const StyledTileList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 200px;
  gap: 10px;
  grid-auto-flow: row dense;
  justify-content: center;
`

const TileList = (props) => {
  console.log(props.list)
  return (
    <StyledTileList>
      {props.list.map((it, i) => {
        return <Tile key={i} text={it}/>
      })}
    </StyledTileList>
  );
};

export default TileList;