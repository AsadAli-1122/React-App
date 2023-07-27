import React from 'react';
import { createRoot } from 'react-dom';
import App from './src/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
