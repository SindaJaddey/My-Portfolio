import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/gilroy/Gilroy-Regular.ttf';
import './assets/fonts/gilroy/Gilroy-Bold.ttf';
import './assets/fonts/gilroy/Gilroy-SemiBold.ttf';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
  document.getElementById('root')
);

