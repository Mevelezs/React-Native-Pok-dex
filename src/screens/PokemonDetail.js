import { SceneView,View } from 'react-native';
import Header from '../components/pokemonDetail/Header'
import Type from '../components/pokemonDetail/Type';
import { useEffect, useState } from 'react';
import  getPokemonByIdApi  from '../api/pokemon';
import Stats from '../components/pokemonDetail/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function PokemonDetail(props) {

  const {
    navigation,
    route: { params: { pokemon } }
  } = props;

  console.log(navigation.setOptions);
  const [pokemonDetail, setPokemonDetail] = useState([]);

  const getPokemonById = async () => {
    try {
      
      const pokemonData = await getPokemonByIdApi(pokemon.id);
      setPokemonDetail(pokemonData)
    } catch (error) {
      navigation.goBack()
    }
  }

   useEffect(() => { 
     navigation.setOptions({
       headerRight: () => null,
       headerLeft: () => <Icon
         name='arrow-left'
         size={24}
         color='#fff'
         style={{ marginLeft: 4, marginTop: 16 }}
         onPress={navigation.goBack}
       />
     }); // navigation llega pro props solo si es un screen
  },[navigation, props.params]); // solo cuando cambie de navegacion o parámetros (pokemon)

  useEffect(() => {
    getPokemonById()
  }, []);
  return (
    <>
      <Header {...pokemon} />
      <Type types={pokemonDetail.types} />
      <Stats stats={pokemonDetail.stats} />
    </>
  )
}
  
