import React from 'react'
import {View, Tex,StyleSheet,Dimensions} from 'react-native'
import Pdf from 'react-native-pdf'


const Confissao = () => {

  const source = require('../../files/comentario.pdf') 
  return(
    <View>
    <Pdf
      source={source}
      onLoadComplete={(numberOfPages,filePath) => {
        console.log(`Number of pages: ${numberOfPages}`);
    }}
    onPageChanged={(page,numberOfPages) => {
        console.log(`Current page: ${page}`);
    }}
    onError={(error) => {
        console.log(error);
    }}
    onPressLink={(uri) => {
        console.log(`Link pressed: ${uri}`);
    }}
     
      style={styles.pdf}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
     
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:100,
      height:100
  }
});

export default Confissao