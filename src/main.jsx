import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Actors from './pages/Actors.jsx'
import ActorsDetail from './pages/ActorsDetail.jsx'
import Home from './pages/Home.jsx'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies.jsx'
import SerieDetail from './pages/SerieDetail.jsx'
import Series from './pages/Series.jsx'
import YourList from './pages/YourList.jsx'

import './App.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: 'filmes', element: <Movies />},
      {path: 'filmes/:id', element: <MovieDetail />},
      {path: 'series', element: <Series />},
      {path: 'series/:id', element: <SerieDetail />},
      {path: 'atores', element: <Actors />},
      {path: 'atores/:id', element: <ActorsDetail />},
      {path: 'favoritos', element: <YourList />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
