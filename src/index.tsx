import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import App from './infra/routes';


const container = document.getElementById('root');
const root = hydrateRoot(container!, <App />);

root.render(<App />);

