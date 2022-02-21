import React,{useState} from 'react'
import {View, Text,ScrollView,StyleSheet,Image,Dimensions,TouchableOpacity} from 'react-native'
import {itemsDepartement} from '../../files'

const {width, height} =Dimensions.get('window')

const Departaments = () =>{

  const [items,setItems] = useState(itemsDepartement)
  return(
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false}>
          {items.map(item =>{
            return(
              <View key={item.id} style={styles.viewDepart}>
               <View style={styles.viewImage}>
                  <Image
                  source={item.img}
                  style={styles.imageDepart}
                  />
               </View>
                <TouchableOpacity style={styles.viewTexts}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
              
              </View>
            )
          })}
       </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   
  },
viewDepart:{
 justifyContent: 'center',
 alignItems: 'center',

 marginBottom:10

},
viewImage:{
  marginBottom:10,
    
},
imageDepart:{
  width:width-20,
  height:300,
  borderRadius:50
},
viewTexts:{
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection:'column',
  backgroundColor: '#085530',
  borderRadius:10,
  paddingHorizontal:10,
  width:width-30,
  height:80,
  textAlign: 'center',
  opacity:9,
  shadowOffset:{
    shadowColor:"#0000",
    elevation:1,
   width:20
  }


},
title:{
  color:'#ffffffff',
  fontWeight:'bold',
  fontSize:20,
  marginBottom:10,
  alignText:'center',
  
  
},
text:{
  color:'#ffff',
  fontWeight:'bold',
},
})

export default Departaments