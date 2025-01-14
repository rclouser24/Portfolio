import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
