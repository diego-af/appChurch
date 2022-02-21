import React from 'react' 

import { NavigationContainer} from '@react-navigation/native'
import {View,StyleSheet,StatusBar} from 'react-native'
import TabRoutes from './src/Routes/tabRoutes'


const App = () =>{
  return(
    <NavigationContainer style={styles.container}>
      <StatusBar backgroundColor="#4c956c" />
      <TabRoutes/>
    
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App