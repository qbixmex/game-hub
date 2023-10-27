import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes';
import theme from './themes/theme.ts';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorTheme} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
