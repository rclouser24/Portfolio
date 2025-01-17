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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      // {
      //   path: '/ErrorPage',
      //   element: <ErrorPage />
      // }
    ],
  },
]);
// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
