import { View, Image, StyleSheet, Text } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonTypes';

export default function Header({ image, order, name, type }) {

  const color = getColorByPokemonType(type);

  const bgStyle = [{backgroundColor:color, ...styles.header}]
  return (
    <View style={styles.bg}>
      <View style={bgStyle}>
        <Text style={styles.number}>#{`${order}`.padStart(3, 0)}</Text>
        <Text style={styles.name}>{capitalize(name)}</Text>
        <View style={styles.content_image}>
          <Image source={{uri:image}} style={styles.image} />
        </View>
      </View>
    
   </View>
  )
}

const styles = StyleSheet.create({

   bg: {
    width:'100%',
    height: 500,
  },
  header: {
    flex: 1,
    padding: 5,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius:300
  },
  number: {
    position: 'absolute',
    top: 50,
    right:10,
    color: 'white',
    fontSize: 28,
    padding: 5
  },
  name: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  content_image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  image: {
    position: 'absolute',
    right: 48,
    bottom:28,
    width: 300,
    height: 300
  }
})
