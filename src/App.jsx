
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokedexById from './components/PokedexById'
import stylesHome from'./styles/stylesHome.css'
function App() {


  return (
    <div className="App">
     <h1>pokeapi</h1>
     <Routes>
      <Route path='/' element={<Home/> } />
      <Route  />
      <Route path='/pokedex' element={<Pokedex />} />
      <Route path='/pokedex/:id' element={<PokedexById /> } />
     </Routes>
    </div>
  )
}

export default App
