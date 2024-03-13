import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './Cart';
import UserDetails from './UserDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cart />
    <UserDetails />
  </React.StrictMode>
);
