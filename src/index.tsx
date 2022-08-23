import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from './infra/routes';

const container = document.getElementById('root');

hydrateRoot(container!, <App />);

reportWebVitals();
