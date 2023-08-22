import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';

import App from './App.jsx';



import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <React.StrictMode>
    <BrowserRouter>
     <App path='/'/>
    </BrowserRouter>
  </React.StrictMode>,
)

