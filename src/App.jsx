import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/home/home'
import MovieList from './components/MovieList/MovieList'
import MovieDetail from './pages/movieDetail/MovieDetail'

function App() {


  return (
  
      <div className='App'>
          <Router> */
            <Header/>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path='movie/:id' element={<MovieDetail/>}></Route>
              <Route path='movies/:type' element={<MovieList/>}></Route>
              <Route path='/*' element={<h1>error page</h1>} ></Route>
            </Routes>
          </Router>
        
       </div>
    
  )
}

export default App
