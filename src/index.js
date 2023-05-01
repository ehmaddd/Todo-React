import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import Navbar from './components/navbar';
import Modal from './components/modal';
import Form from './components/form';

const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
      <Form />
    </React.StrictMode>
  );