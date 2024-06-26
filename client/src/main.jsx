import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Explore from './pages/Explore.jsx'
import Popular from './pages/Popular.jsx'
import About from './pages/About.jsx'
import Favorite from './pages/Favorite.jsx'
import Profile from './pages/Profile.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
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

      <Route path="" element={<App />}>
        <Route path="sign-up" element={<Register />} />
        <Route path="sign-in" element={<Login />} />
      </Route>
      <Route path="/explore" element={<Explore />}/>
      <Route path="/popular" element={<Popular />}/>
      <Route path="/favorite" element={<Favorite />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/profile" element={<Profile />}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
