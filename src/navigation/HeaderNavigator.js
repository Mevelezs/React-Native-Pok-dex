import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetailScreen from '../screens/PokemonDetail';
import PokedexScreen from '../screens/Pokedex';

const Stack = createNativeStackNavigator()

export default function HeaderNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pokedex"
        component={PokedexScreen}
        options={{
          title: ' ',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="pokemonDetail"
        component={PokemonDetailScreen}
        options={{
          title: ' ',
          headerTransparent: true,
          }}
        
      />
    </Stack.Navigator>
  )
}
