import { FlatList, Platform, StyleSheet } from 'react-native'
import PokemonCard from './PokemonCard'
import { ActivityIndicator } from 'react-native-paper'

export default function PokemonList({ pokemons,loadPokemon , nextUrl }) {
  
  const loadMore = () => {
    loadPokemon()
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={ nextUrl && loadMore }// cuando llega al final ejecuta esta fn
      onEndReachedThreshold={0.2} // tiempo justo antes de que se ejecute
      ListFooterComponent={ // footer
        nextUrl && (
          <ActivityIndicator // spinner
            style={styles.spinner}
            size="large"
            animating={true}
            />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android'? 36 : 0,
  },
  spinner: {
    color: "black",
    marginBottom:50
  }
})
