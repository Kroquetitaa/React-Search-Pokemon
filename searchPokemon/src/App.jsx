import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchPokemon from './components/searchPokemon/SearchPokemon';
import Footer from './components/Footer/Footer';


const App = () => {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={ <Home />}></Route>
          <Route path='/search' element={ <SearchPokemon /> }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
