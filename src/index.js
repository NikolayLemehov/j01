import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from "styled-components";
import {DataProvider} from "./components/context/DataContext";

const Global = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 24px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;
}
.adopt-grid {
  
}
`
ReactDOM.render(
  <>
    <Global/>
    <React.StrictMode>
      <DataProvider>
        <App/>
      </DataProvider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);
