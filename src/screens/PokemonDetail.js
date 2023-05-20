import { ScrollView, View } from 'react-native';
import Header from '../components/pokemonDetail/Header'
import Type from '../components/pokemonDetail/Type';
import { useEffect, useState } from 'react';
import  getPokemonByIdApi  from '../api/pokemon';


export default function PokemonDetail(props) {
  const { route: { params: { pokemon } } } = props;
  const [pokemonDetail, setPokemonDetail] = useState([]);

  const getPokemonById = async () => {
    const pokemonData = await getPokemonByIdApi(pokemon.id);
    setPokemonDetail(pokemonData)
  }


  useEffect(() => { 
     getPokemonById()
  }, [])
  return (
    <ScrollView>
      <Header {...pokemon} />
      <Type types={ pokemonDetail } />
    </ScrollView>
  )
}
  
