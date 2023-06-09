import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../screens/Favorite';
import Acount from '../screens/Acount';
import HeaderNavigator from './HeaderNavigator';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favoritos"
        component={Favorite}
        options={{
          tabBarLabel: 'Favoritos',
          headerTitleAlign: 'center',
          tabBarIcon: ({color, size}) => (
            <Icon name='heart' color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="HeaderNavigator"
        component={HeaderNavigator}
        options={{
          tabBarLabel: ' ',
          headerTitleAlign:'center',
          tabBarIcon: () => RenderPokeball(),
          title: 'Pokedex',
          headerTitleStyle: {
            color: '#f0f',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            padding: 5,
          }
        }}
      />
      <Tab.Screen
        name="Mi cuenta"
        component={Acount}
        options={{
          tabBarLabel: 'Mi cuenta',
          headerTitleAlign:'center',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

function RenderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width:75, height:75, top: -18}}
    />
  )
}
