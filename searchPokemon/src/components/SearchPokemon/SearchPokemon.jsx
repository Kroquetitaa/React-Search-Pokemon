import React, { useState, useEffect } from 'react'
import './SearchPokemon.css'
import CardPokemon from '../CardPokemon/CardPokemon';
import { useDebounce } from "use-debounce";
import { getPokemonData } from '../../api/apiCalls';

const SearchPokemon = () => {

  const [ pokemonName, setPokemonName ] = useState(undefined);
  const [ filter, setFilter ] = useState('');
  const [ debounceFilter ] = useDebounce(filter, 500);

  useEffect(() => {
    getPokemonData(filter).then((pokemon) => setPokemonName(pokemon));
  }, [debounceFilter]);

  const handleChangeFilter = (e) => {
    const StringtoLower = e.target.value.toLowerCase().trim();
    setFilter(StringtoLower);
  }

  return (
    <div className='searchPokemon'>
      <p className='searchPokemon-title'>Escribe el pokemon que quieres buscar</p>
      <CardPokemon pokemon={ pokemonName }/>
      <input className='searchPokemon-input' type="text" defaultValue={ filter } onChange={ e => { handleChangeFilter(e) }}/>
    </div>
  )
}

export default SearchPokemon