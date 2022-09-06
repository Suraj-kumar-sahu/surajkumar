import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //removed this strict mode because of this ityped was showing double letters
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

