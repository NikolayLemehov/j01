import React from 'react';
import Tile from "./Tile/Tile";
import styled from "styled-components";
import AddTileBtn from "./AddTileBtn";

const StyledTileList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: 200px;
  gap: 10px;
  grid-auto-flow: row dense;
  justify-content: center;
`

const TileList = (props) => {
  return (
    <StyledTileList>
      {props.list.map((it) => {
        return <Tile
          key={it.id}
          id={it.id}
          text={it.value}
          removeTile={props.removeTile}
        />
      })}
      <AddTileBtn addTile={props.addTile}/>
    </StyledTileList>
  );
};

export default TileList;