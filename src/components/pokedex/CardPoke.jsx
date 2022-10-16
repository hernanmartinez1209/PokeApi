import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CardPoke = ({url}) => {
 const [pokemon , setPokemon] =useState()
useEffect(() => {
    axios.get(url)
    .then(res => setPokemon(res.data))
    .catch( err => console.log(err) )



}, [])
console.log(pokemon);
const navigate = useNavigate()
const handleClick = ()=>{
    navigate(`/pokedex/${pokemon.id}`)
}
  return (
    <article  onClick={handleClick}>
        <header>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} />

        </header>
        <section>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(type => (
                        <li key={type.slot}>{type.type.name}</li>
                    ))
                }
            </ul>
            <p>type</p>
        </section>
            <ul>
                {
                    pokemon?.stats.map(stat =>(
                        <li key={stat.stat.name}>
                        <span>{stat.stat.name}</span>
                        <span>{stat.base_stat}</span>
                        </li>
                    ))
                }
            </ul>
    </article>
  )
}

export default CardPoke