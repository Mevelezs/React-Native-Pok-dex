import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import {getPokemonDetailByUrlApi, getPokemonsApi} from '../api/pokemon'
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() =>{
    (async () => {
      await loadPokemon();
    })();
  }, [])
  
  const loadPokemon = async () => {
    const data = await getPokemonsApi()
    const pokemonsArray = [];

    for await (const item of data) {
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
  }
  

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}

