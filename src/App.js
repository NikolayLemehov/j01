import React, {useEffect, useState} from "react";
import Output from "./components/Output";
import TileList from "./components/TileList";
import styled from "styled-components";
import AdoptedGridRow from "./components/AdoptedGridRow";
import {nanoid} from "nanoid";

const Title = styled.h1`
  text-align: center;
`
const maxTextLength = 1000;
const defaultValueList = [4, 3];
const defaultList = defaultValueList.map((it) => ({value: it, id: nanoid()}));
const findRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const newDefaultList = defaultList.map((it) => {
      const intervalId = setInterval(
        () => setText((prevValue) => (prevValue + it.value)), it.value * 1000)
      return ({
        ...it, intervalId
      })
    });
    setList(newDefaultList);
  }, [])
  const [text, setText] = useState('')
  const onRemoveTile = (id) => {
    setList((prevState) => {
      const arr = [...prevState];
      const index = arr.findIndex(it => id === it.id)
      clearInterval(arr[index].intervalId);
      arr.splice(index, 1);
      return arr;
    })
  };
  const onClickAddTile = () => {
    const value = findRandomInteger(1, 5);
    const intervalId = setInterval(() => {
      setText((prevValue) => {
        const valueLength = String(value).length;
        return prevValue.length + valueLength <= maxTextLength
          ? `${prevValue}${value}`
          : `${prevValue.slice(valueLength)}${value}`;
      });
    }, value * 1000);
    setList((prevState) => {
      return [...prevState, {value, id: nanoid(), intervalId}]
    });
  };

  return (
    <div className='container'>
      <AdoptedGridRow>
        <Title>Test application</Title>
        <a href="https://github.com/NikolayLemehov/j01" target="_blank" rel="nofollow noopener noreferrer">GitHub Repository</a>
      </AdoptedGridRow>
      <Output
        text={text || ' '}
      />
      <AdoptedGridRow>
        <button onClick={onClickAddTile}>+</button>
        short list: {list.map(it => it.value)}
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
