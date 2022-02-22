import React, {useState} from "react";
import Output from "./components/Output";
import TileList from "./components/TileList";
import styled from "styled-components";
import AdoptedGridRow from "./components/AdoptedGridRow";

const Title = styled.h1`
  text-align: center;
`


function App() {
  const [list, setList] = useState([4, 4, 5, 3, 3, 4, 5]);
  const onClick = () => {
    setList((prevState) => {
      return [...prevState, 1]
    });
  }

  return (
    <div className='container'>
      <Title>Test application</Title>
      <Output/>
      <AdoptedGridRow>
        <button onClick={onClick}>+</button>
        something: {list}
      </AdoptedGridRow>
      <TileList list={list}/>
    </div>
  );
}

export default App;
