import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ReactQueryDevtools } from 'react-query/devtools'

//react query
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './infra/routes';
import configEnv from './utilities/config.utility';

const container = document.getElementById('root');
const root = createRoot(container!);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: configEnv.cache_time, // 24 hours
    }
  }
});

root.render(

  <QueryClientProvider client={queryClient} >
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>

);

reportWebVitals();
