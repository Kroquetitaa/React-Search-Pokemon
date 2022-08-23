import React, { useState, useEffect, useCallback } from 'react'
import './SearchPokemon.css'
import CardPokemon from '../CardPokemon/CardPokemon';
import { useDebounce } from "use-debounce";
import { getPokemonData } from '../../api/apiCalls';
import { DeletedPokemon } from '../DeletedPokemon/DeletedPokemon.jsx'

const SearchPokemon = () => {

  const [ pokemonName, setPokemonName ] = useState(null);
  const [ filter, setFilter ] = useState('');
  const [ debounceFilter ] = useDebounce(filter, 500);

  useEffect(() => {
    getPokemonData(filter).then((pokemon) => setPokemonName(pokemon));
  }, [debounceFilter]);

  const handleChangeFilter = (e) => {
    if( e.target.value != ''){
      const StringtoLower = e.target.value.toLowerCase().trim();
      setFilter(StringtoLower);
    } else {
      deletedPokemon();
    }
  }

  const deletedPokemon = useCallback( () => {
    setPokemonName(null);
  });

  return (
    <div className='searchPokemon'>
      { console.log( typeof pokemonName )}
      <p className='searchPokemon-title'>Escribe el pokemon que quieres buscar</p>
      {  pokemonName ? <CardPokemon pokemon={ pokemonName }/> : <DeletedPokemon pokemon={ deletedPokemon }/> }
      <input className='searchPokemon-input' type="text" defaultValue={ filter  } onChange={ e => { handleChangeFilter(e) }}/>
    </div>
  )
}

export default SearchPokemon