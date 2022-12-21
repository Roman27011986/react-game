import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {createGlobalStyle} from "styled-components";

const Glibal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

img {
  width: 100%;
  height: auto;
}

button {
  border: none;
  outline: none;
}
`

const theme = {
  colors: {
    btnGreen: "rgba(56, 223, 122, 1)",
    yellow: "#FFD748",
    radioChecked: "#104987"
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <Glibal />
          <App/>
        </DndProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
