import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './Components/Home/Index'
import Movie from './Components/Movies/Index'
import Series from './Components/Series/Index'
import Trendings from './Components/Trendings/Index'
import Movies from './Components/Movies/Index'

function App() {

  return (
    <div>
      
      <div>
        <BrowserRouter>
          <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/trendings">Trendings</Link></li>
          </ul>

          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
          <Route path="/trendings" element={<Trendings/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  )
}

export default App
