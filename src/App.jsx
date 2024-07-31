import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './Styles.css'
import Home from './Components/Home/Index'
import Movie from './Components/Movies/Index'
import Series from './Components/Series/Index'
import Trendings from './Components/Trendings/Index'
import Movies from './Components/Movies/Index'

function App() {
  return (
    <div>
      
      <div className='headerNavegacao'>
        <BrowserRouter>
          <ul>
          <li className='menu-item'><Link to="/home">Home</Link></li>
          <li className='menu-item'><Link to="/movies">Movies</Link></li>
          <li className='menu-item'><Link to="/series">Series</Link></li>
          <li className='menu-item'><Link to="/trendings">Trendings</Link></li>
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
