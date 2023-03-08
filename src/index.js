import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from 'Routing';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { gameApi } from 'redux/apiSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider api={gameApi}>
      <Routing />
    </ApiProvider>
  </React.StrictMode>
);
