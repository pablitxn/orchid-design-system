import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/assets/styles/shadcn.css';
import '../src/assets/styles/neobrutalism.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)