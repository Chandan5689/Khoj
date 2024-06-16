import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Explore from './pages/Explore.jsx'
import './index.css'
import About from './pages/About.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<App />} />
      <Route path="explore" element={<Explore />} />
      <Route path="favourite" />
      <Route path="/about" element={<About/>} />

    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
