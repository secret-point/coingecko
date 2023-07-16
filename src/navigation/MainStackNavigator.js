import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '~Root/screens/Details';
import Home from '~Root/screens/Home';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
