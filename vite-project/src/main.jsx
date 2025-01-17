import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import ErrorPage from './pages/ErrorPage';
// import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/ErrorPage',
        element: <ErrorPage />
      }
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
