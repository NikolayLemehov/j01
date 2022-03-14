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
const defaultList = defaultValueList.map((it) => ({value: it, id: nanoid()}));
const findRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

function App() {
  const [list, setList] = useState(() => {
    return defaultList.map((it) => ({...it, intervalId: setInterval(
      () => setText((prevValue) => (prevValue + it.value)), it.value * 1000)}));
  });
  const [text, setText] = useState('')
  const onRemoveTile = (data) => {
    setList((prevState) => {
      const arr = [...prevState];
      const index = arr.findIndex(it => data.id === it.id)
      clearInterval(arr[index].intervalId);
      arr.splice(index, 1);
      return arr;
    })
  };
  const onClickAddTile = () => {
    setList((prevState) => {
      const value = findRandomInteger(1, 5);
      return [...prevState, {value, id: nanoid(), intervalId: setInterval(
          () => setText((prevValue) => (`${prevValue}${value}`)), value * 1000)}]
    });
  };

  return (
    <div className='container'>
      <AdoptedGridRow>
        <Title>Test application</Title>
        <a href="https://github.com/NikolayLemehov/j01" target="_blank" rel="nofollow noopener noreferrer">GitHub Repository</a>
      </AdoptedGridRow>
      <Output
        text={text}
      />
      <AdoptedGridRow>
        <button onClick={onClickAddTile}>+</button>
        something: {list.map(it => it.value)}
      </AdoptedGridRow>
      <TileList
        list={list}
        removeTile={onRemoveTile}
        addTile={onClickAddTile}
      />
    </div>
  );
}

export default App;
