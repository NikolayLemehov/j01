import React, {useCallback, useContext, useEffect, useState} from 'react';
import {nanoid} from "nanoid";

const DataContext = React.createContext();
export const useData = () => useContext(DataContext);
const maxTextLength = 1000;
const defaultValueList = [4, 3];
const defaultList = defaultValueList.map((it) => ({value: it, id: nanoid(), intervalId: null}));
const findRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const DataProvider = ({children}) => {
  const [text, setText] = useState('')
  const [list, setList] = useState(() => defaultList);
  console.log('DataProvider', list.map((it) => it.value));
  // debugger;
  const onTimeout = (value, id) => {
    // console.log('onTimeout', list.map((it) => it.value))
    onSetTextInterval(value);
    updateTimeout(id);
  };
  const updateTimeout = useCallback((id) => {
    setList((prevState) => {
      const index = prevState.findIndex(it => id === it.id);
      if (index === -1) return prevState;
      console.log('prevState 1', prevState.map((it) => it.value), index);
      const arr = [...prevState];
      const item = arr[index];
      if (item.value > 1) {
        console.log('-1')
        item.value = item.value - 1;
        item.intervalId = setTimeout(onTimeout, item.value * 1000, item.value, item.id);
      } else {
        onRemoveTile(id);
      }
      // console.log('prevList', list.map((it) => it.value));
      console.log('prevState 2', arr.map((it) => it.value), index)
      return arr;
    })
  }, [list, text]);
  const onSetTextInterval = useCallback((value) => {
    setText((prevValue) => {
      console.log('onSetTextInterval', value);
      const valueLength = String(value).length;
      return prevValue.length + valueLength <= maxTextLength
        ? `${prevValue}${value}`
        : `${prevValue.slice(valueLength)}${value}`;
    });
  }, [text]);
  useEffect(() => {
    console.log('useEffect', list.map((it) => it.value))
    setList((prevState => {
      return prevState.map((it) => {
        it.intervalId = setTimeout(onTimeout, it.value * 1000, it.value, it.id);
        return it;
      });
    }))
    // const newDefaultList = defaultList.map((it) => {
    //   const intervalId = setTimeout(onTimeout, it.value * 1000, it.value, it.id);
    //   return ({...it, intervalId})
    // });
    // prevList.current = newDefaultList;
    // setList(newDefaultList);
    // console.log('prevList', prevList.current.map((it) => it.value), list);
    // console.log('useEffect', newDefaultList, prevList.current)
  }, [])

  const onRemoveTile = (id) => {
    console.log('remove 1')
    setList((prevState) => {
      const arr = [...prevState];
      const index = arr.findIndex(it => id === it.id)
      clearTimeout(arr[index].intervalId);
      arr.splice(index, 1);
      console.log('remove 2', arr.map((it) => it.value))
      return arr;
    })
    console.log('remove 3', list.map((it) => it.value))
  };
  const onClickAddTile = () => {
    const value = findRandomInteger(1, 5);
    const id = nanoid();
    const intervalId = setTimeout(onTimeout, value * 1000, value, id);
    setList((prevState) => {
      return [...prevState, {value, id, intervalId}]
    });
  };

  return (
    <DataContext.Provider value={{text, list, onRemoveTile, onClickAddTile}}>
      {children}
    </DataContext.Provider>
  );
};
