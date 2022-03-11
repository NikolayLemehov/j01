import React, {useState} from "react";
import Output from "./components/Output";
import TileList from "./components/TileList";
import styled from "styled-components";
import AdoptedGridRow from "./components/AdoptedGridRow";
import {nanoid} from "nanoid";

const Title = styled.h1`
  text-align: center;
`
const defaultValueList = [4, 4, 5, 3, 3, 4, 5];
const defaultList = defaultValueList.map((it) => ({value: it, id: nanoid()}))
function App() {
  const [list, setList] = useState(() => defaultList);
  const onClick = () => {
    setList((prevState) => {
      return [...prevState, {value: 1, id: nanoid()}]
    });
  }
  const onRemoveTile = (data) => {
    setList((prevState) => {
      const arr = [...prevState];
      const index = arr.findIndex(it => data.id === it.id)
      arr.splice(index, 1);
      return arr;
    })
  };

  return (
    <div className='container'>
      <AdoptedGridRow>
        <Title>Test application</Title>
        <a href="https://github.com/NikolayLemehov/j01" target="_blank" rel="nofollow noopener noreferrer">GitHub Repository</a>
      </AdoptedGridRow>
      <Output/>
      <AdoptedGridRow>
        <button onClick={onClick}>+</button>
        something: {list.map(it => it.value)}
      </AdoptedGridRow>
      <TileList
        list={list}
        removeTile={onRemoveTile}
      />
    </div>
  );
}

export default App;
