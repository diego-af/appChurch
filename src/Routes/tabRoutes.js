import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer,useNavigation} from '@react-navigation/native';
//import Routess from './Routes'
import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre/index';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import History from '../pages/Historia/index'
import { TouchableOpacity,Text } from 'react-native';

const BottomTabs = createBottomTabNavigator();

const TabRoutes = () => {
  const navigation = useNavigation()
  return (
    <BottomTabs.Navigator
    screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard:true,
      tabBarShowLabel:false,
      
      tabBarActiveBackgroundColor:'#4c956c',
      tabBarInactiveBackgroundColor:'#ffff',
      tabBarActiveTintColor:'#ffff',
      tabBarInactiveTintColor:'#4c956c',
      
      
    }}
    >
      <BottomTabs.Screen
        name="HomeStack"
        component={StackRoutes}
        options={{
          headerShown: false,
          tabBarIcon:({color,size})=>{
            return(
              <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
                <Feather name="home" size={size} color= {color} />
              </TouchableOpacity>
            )
          }
        }}
      />
      <BottomTabs.Screen name="Sobre" component={Sobre}
        options={{
          tabBarIcon:({color,size})=>{
            return(
              <FontAwesome name="info" size={size} color={color}/>
            )
          },
          headerShown:true,
          headerLeft:()=>{
            return(
              <TouchableOpacity style={{marginLeft:5}} onPress={()=> navigation.goBack()}>
              <FontAwesome name="arrow-left" size={22} color="#085530"/>
             </TouchableOpacity>
            )
          },
          headerRight:()=>{
            return(
              <TouchableOpacity style={{marginRight:10}} onPress={()=> navigation.goBack()}>
                <FontAwesome name="book" size={30} color="#085530"/>
             </TouchableOpacity>
            )
          },
       
        }}
      />
      <BottomTabs.Screen name="Historia" component={History}
        options={{
          tabBarIcon:({color,size})=>{
            return(
              <Feather name="book-open" size={size} color={color}/>
            )
          }
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabRoutes;
