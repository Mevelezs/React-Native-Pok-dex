import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native'
import { capitalize } from 'lodash';
import getColorByPokemonType from '../utils/getColorByPokemonTypes';
import { useNavigation } from '@react-navigation/native';


export default function PokemonCard({ pokemon }) {
  const Navigation = useNavigation();

  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {
    Navigation.navigate('pokemonDetail', { pokemon : pokemon});
               // nombre del componente // id del poke al que de accede
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}> 
          <View style={bgStyle}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>   
        </View>
      </View>
    </TouchableWithoutFeedback >
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding:5
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 5
  },
  number: {
    position: 'absolute',
    top: 10,
    right:10,
    color: 'white',
    fontSize: 11,
    padding: 5
  },
  name: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop:15
  },
  image: {
    position: 'absolute',
    right: 2,
    bottom:2,
    width: 90,
    height: 90
  }
})
