import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetail from '../screens/PokemonDetail';
import Pokedex from '../screens/Pokedex';

const Stack = createNativeStackNavigator()

export default function HeaderNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pokedex"
        component={Pokedex}
        options={{
          title: '',
          headerTransparent:true
        }}
      />
      <Stack.Screen
        name="pokemonDetail"
        component={PokemonDetail}
        options={{
          title: '',
          headerTransparent: true,
          }}
        
      />
    </Stack.Navigator>
  )
}
