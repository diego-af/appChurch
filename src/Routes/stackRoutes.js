import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/index';
import Confissao from '../pages/Confissao';
import Departaments from '../pages/Departments';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false}}/>
      <Stack.Screen name="Confissao" component={Confissao}  />
      <Stack.Screen name="Departamentos" component={Departaments}  />
    </Stack.Navigator>
  );
};

export default StackRoutes;
