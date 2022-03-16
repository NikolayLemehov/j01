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
    console.log('init')
    const newDefaultList = defaultList.map((it) => {
      const intervalId = setInterval(
        () => setText((prevValue) => (prevValue + it.value)), it.value * 1000)
      console.log('init intervalId', intervalId)
      return ({
        ...it, intervalId
      })
    });
    setList(newDefaultList);
  }, [])
  console.log(list)
  const [text, setText] = useState('')
  const onRemoveTile = (id) => {
    console.log('onRemoveTile')
    setList((prevState) => {
      const arr = [...prevState];
      console.log(arr)
      const index = arr.findIndex(it => id === it.id)
      // console.log(arr, index, arr[index].intervalId)
      clearInterval(arr[index].intervalId);
      arr.splice(index, 1);
      return arr;
    })
  };
  const onClickAddTile = () => {
    console.log('onClickAddTile')
    setList((prevState) => {
      const value = findRandomInteger(1, 5);
      console.log('setList add')
      const intervalId = setInterval(() => {
        setText((prevValue) => {
          const valueLength = String(value).length;
          return prevValue.length + valueLength <= maxTextLength
            ? `${prevValue}${value}`
            : `${prevValue.slice(valueLength)}${value}`;
        });
      }, value * 1000);
      console.log(intervalId)
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
