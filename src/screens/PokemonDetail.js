import { ScrollView } from 'react-native';
import Header from '../components/pokemonDetail/Header'


export default function PokemonDetail(props) {
  const { route: { params: { pokemon } } } = props;
 
  return (
    <ScrollView>
      <Header {...pokemon} />
    </ScrollView>
  )
}
  
