import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Import the compiled styles with all Tailwind utilities
import '@orchid-design-system/ui/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);