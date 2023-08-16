import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import ErrorPage from './routes/ErrorPage.jsx';
import Alugar from './routes/Alugar.jsx';
import Anunciar from './routes/Anunciar.jsx';
import Anuncio from './routes/Anuncio.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/alugar",
        element: <Alugar />,
      },
      {
        path: "/alugar/anuncio/:id",
        element: <Anuncio />,
      },
      {
        path: "/anunciar",
        element: <Anunciar />,
      },
    ]

  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
