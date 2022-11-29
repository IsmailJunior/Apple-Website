import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
export { default as Layout } from './components/layout/Layout';
export { default as Navigation } from './components/layout/Navigation';
export { default as HomePage } from './pages/HomePage';
export { default as StorePage } from './pages/StorePage';
export { default as View } from './components/View';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

