const URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemonData = async (name) => {
  const data = await fetch(`${URL}${name}`);
  const dataJson = await data.json();
  return {
    name: dataJson.name,
    img: dataJson.sprites.versions['generation-v']['black-white']['animated']['front_default'],
    types: dataJson.types[0].type.name,
    id: dataJson.id,
    order: dataJson.order,
    abilities: dataJson.abilities.map( value => value.ability.name ),
    species: dataJson.species.name,
    attack: dataJson.stats[1].base_stat,
    defense: dataJson.stats[2].base_stat,
    speed: dataJson.stats[5].base_stat,
    hp: dataJson.stats[0].base_stat

}
}