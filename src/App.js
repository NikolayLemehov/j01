import React, {useCallback, useEffect, useRef, useState} from "react";
import Output from "./components/Output";
import TileList from "./components/TileList";
import styled from "styled-components";
import AdoptedGridRow from "./components/AdoptedGridRow";
import {nanoid} from "nanoid";
import {useData} from "./components/context/DataContext";

const Title = styled.h1`
  text-align: center;
`
const maxTextLength = 1000;
const defaultValueList = [4, 3];
const defaultList = defaultValueList.map((it) => ({value: it, id: nanoid(), intervalId: null}));
const findRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

function App() {
  // console.log('app')
  // const [text, setText] = useState('')
  // const [list, setList] = useState(() => defaultList);
  // console.log('app', list.map((it) => it.value));
  const {text, list, onRemoveTile, onClickAddTile} = useData();
  // console.log('data', data)

  // const onTimeout = (value, id) => {
  //   // console.log('onTimeout', list.map((it) => it.value))
  //   onSetTextInterval(value);
  //   updateTimeout(id);
  // };
  // const updateTimeout = useCallback((id) => {
  //   setList((prevState) => {
  //     const index = prevState.findIndex(it => id === it.id);
  //     if (index === -1) return prevState;
  //     console.log('prevState 1', prevState.map((it) => it.value), index);
  //     const arr = [...prevState];
  //     const item = arr[index];
  //     if (item.value > 1) {
  //       console.log('-1')
  //       item.value = item.value - 1;
  //       item.intervalId = setTimeout(onTimeout, item.value * 1000, item.value, item.id);
  //     } else {
  //       onRemoveTile(id);
  //     }
  //     // console.log('prevList', list.map((it) => it.value));
  //     console.log('prevState 2', arr.map((it) => it.value), index)
  //     return arr;
  //   })
  // }, [text]);
  // const onSetTextInterval = useCallback((value) => {
  //   setText((prevValue) => {
  //     console.log('onSetTextInterval', value);
  //     const valueLength = String(value).length;
  //     return prevValue.length + valueLength <= maxTextLength
  //       ? `${prevValue}${value}`
  //       : `${prevValue.slice(valueLength)}${value}`;
  //   });
  // }, [text]);
  // useEffect(() => {
  //   console.log('useEffect', list.map((it) => it.value))
  //   setList((prevState => {
  //     return prevState.map((it) => {
  //       it.intervalId = setTimeout(onTimeout, it.value * 1000, it.value, it.id);
  //       return it;
  //     });
  //   }))
  //   // const newDefaultList = defaultList.map((it) => {
  //   //   const intervalId = setTimeout(onTimeout, it.value * 1000, it.value, it.id);
  //   //   return ({...it, intervalId})
  //   // });
  //   // prevList.current = newDefaultList;
  //   // setList(newDefaultList);
  //   // console.log('prevList', prevList.current.map((it) => it.value), list);
  //   // console.log('useEffect', newDefaultList, prevList.current)
  // }, [])
  //
  // const onRemoveTile = (id) => {
  //   console.log('remove 1')
  //   setList((prevState) => {
  //     const arr = [...prevState];
  //     const index = arr.findIndex(it => id === it.id)
  //     clearTimeout(arr[index].intervalId);
  //     arr.splice(index, 1);
  //     console.log('remove 2', arr.map((it) => it.value))
  //     return arr;
  //   })
  //   console.log('remove 3', list.map((it) => it.value))
  // };
  // const onClickAddTile = () => {
  //   const value = findRandomInteger(1, 5);
  //   const id = nanoid();
  //   const intervalId = setTimeout(onTimeout, value * 1000, value, id);
  //   setList((prevState) => {
  //     return [...prevState, {value, id, intervalId}]
  //   });
  // };

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
