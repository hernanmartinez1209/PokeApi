import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from './pokedex/CardPoke'
import InputSearch from './pokedex/InputSearch'
import SelectByType from './pokedex/SelectByType'

const Pokedex = () => {
  const userName =  useSelector(state =>state.userName)
 const[pokemons ,setPokemons] = useState()
 const[typeSelected, setTypeSelected] = useState('All Pokemons')
  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
      .then(res=> {
        
        const result = res.data.pokemon.map( e => e.pokemon)
        setPokemons(result)
      })
       .catch(err => console.log(err))
    }else{

      const baseURL ='https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0'
      axios.get(baseURL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
    }, [typeSelected])
  console.log(pokemons);
  return (
    <div>
        <header>

            <h1>pokedex</h1>
            <p>welcome <span>{userName}</span></p>
        
        </header>
        <aside>
      <InputSearch />
      <SelectByType  setTypeSelected={setTypeSelected}/>
     </aside>
      <main>
        <div className="card-container">
          {
            pokemons?.map(pokemon =>(
              <CardPoke key={pokemon.url} 
              url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex