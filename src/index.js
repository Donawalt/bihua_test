import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BlockImage from './Components/BlockImage/BlockImage.js'
import BlockTexte from './Components/BlockTexte/BlockTexte.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="Page">
      <BlockImage />
      <BlockTexte />
    </div>
    
  </React.StrictMode>
);

