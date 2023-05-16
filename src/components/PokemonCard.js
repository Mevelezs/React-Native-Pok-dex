import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Pressable } from 'react-native'
import React from 'react'

export default function PokemonCard({ pokemon }) {
  
  const goToPokemon = () => {
      console.log(`vamos al ${pokemon.id}`) 
  }
  return (
    <Pressable onPress={goToPokemon}>
      <Text>Hola mundo</Text>
    </Pressable>
  )
}
