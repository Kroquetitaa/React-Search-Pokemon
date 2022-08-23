import React, { useState } from 'react'
import './CardPokemon.css'

const CardPokemon = ( { pokemon } ) => {

  console.log( pokemon );

  return (
    <div className='cardPokemon'>
      { pokemon != null ? (<div className='card'>
        <div>
          <p className='card-number'><span>Nº de Carta:</span> { pokemon.order } </p>
          <p className='card-id'><span>ID: </span>{pokemon.id}</p>
          <p className='card-name'><span>Nombre: </span> {pokemon.name}</p>
        </div>
        <div>
          <img className='card-image' src={ pokemon.img } alt={ pokemon.name }/>
        </div>
        <div>
          <p className='card-number'><span>Tipo:</span> { pokemon.types } </p>
          <p className='card-ability'><span>Habilidades:</span> { pokemon.abilities.join(', ') }</p>
          <p className='card-attack'><span>Ataque:</span> { pokemon.attack } </p>
        </div>
        <div>
          <p className='card-deffend'><span>Defensa:</span> { pokemon.defense } </p>
          <p className='card-velocity'><span>Velocidad</span> { pokemon.speed } </p>
          <p className='card-life'><span>Vida</span> { pokemon.hp } </p>
        </div>
      </div>) : <p>Elije un pokemon...</p>}
    </div>
  )
}

export default CardPokemon