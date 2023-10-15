import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={<h1 className='text-dark-1'>ERROR</h1>}> */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
