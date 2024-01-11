import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import CurrentEmployee from './pages/CurrentEmployee/CurrentEmployee';
import Error404 from './pages/Error404/Error404';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <CreateEmployee />,
        errorElement: <Error404 />
      }, 
      {
        path: 'employee-list',
        element: <CurrentEmployee />,
        errorElement: <Error404 />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
