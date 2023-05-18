import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import {getPokemonDetailByUrlApi, getPokemonsApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
   loadPokemon();
  },[])
  
  const loadPokemon = async () => {
  
    const data = await getPokemonsApi(nextUrl);
    
    const pokemonsArray = [];
    
    for await (const item of data.results) {
      const pokemonDetail = await getPokemonDetailByUrlApi(item.url)
      
      
      pokemonsArray.push({
        name: pokemonDetail.name,
        id: pokemonDetail.id,
        type: pokemonDetail.types[0].type.name,
        order: pokemonDetail.order,
        image: pokemonDetail.sprites.other['official-artwork'].front_default,
      })
    }
    setPokemons([...pokemons, ...pokemonsArray])
    setNextUrl(data.next)
   
  }
  

  return (
    <View>
      <PokemonList
        pokemons={pokemons}
        loadPokemon={loadPokemon}
        nextUrl={nextUrl}
      />
    </View>
  )
}

