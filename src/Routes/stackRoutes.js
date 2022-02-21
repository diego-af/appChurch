import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Confissao from '../pages/Confissao';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false}}/>
      <Stack.Screen name="Confissao" component={Confissao}  />
    </Stack.Navigator>
  );
};

export default StackRoutes;
