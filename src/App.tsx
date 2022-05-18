import React, { useState } from 'react';
import Routers from './routes/Routers';
import './App.css';
import { GlobalStyle } from 'styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routers />
    </>
  );
}

export default App;
