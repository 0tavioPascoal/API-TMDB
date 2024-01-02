import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importações
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'


//css
import './index.css'
import Movie from './Pages/Movies.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Movie />}/>
        <Route path="/search" element={<Search />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
