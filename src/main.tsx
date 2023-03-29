import React from 'react';
import ReactDOM from 'react-dom/client';
import router from '@/routes';
import { RouterProvider } from 'react-router-dom';
import './assets/styles/tailwind.css';
import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
  </>
);
