import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const routerBasename = import.meta.env.BASE_URL;
const redirectPath = window.location.search.match(/^\?\/(.*)/);

if (redirectPath) {
  const restoredPath = `/${redirectPath[1]}`;

  window.history.replaceState(
    null,
    '',
    `${routerBasename}${restoredPath}${window.location.hash}`.replace(/\/{2,}/g, '/')
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
