import { View, Text, StyleSheet} from 'react-native'
import { map, capitalize } from 'lodash';
import React from 'react'
import getColorByPokemonType from '../../utils/getColorByPokemonTypes'

export default function Type({ types }) {
  
  return (
    <View style={styles.content }>
      {
          map(types, (poke, index ) => (
            <View key={index}
              style={
                {
                  ...styles.pill,
                  backgroundColor: getColorByPokemonType(poke.type.name)
                }
              }
            >
              <Text>{capitalize(poke.type.name)}</Text>
            </View>
          ))
      }
    </View>
  )
}
      
const styles = StyleSheet.create({
  content: {
    margin: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
})
