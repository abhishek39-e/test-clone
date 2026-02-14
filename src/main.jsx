import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Loginpage from '../component/Loginpage.jsx';
import Register from '../component/Register.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />hhh
    children: [
      {
        path: 'loginpage  ',
        element: <Loginpage />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
