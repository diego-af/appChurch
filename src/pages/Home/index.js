import React from 'react'


import { View, Image, StyleSheet, Text, TouchableOpacity,ImageBackground } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Home = ({navigation}) =>{
  return(
    <View style={styles.container}>
     <ImageBackground
      source={require('../../assests/paisagem.jpg')}
      style={styles.imageBack}
     >
     <View style={styles.viewImage}>
            <Image
            source={require('../../assests/logo.jpg')}
            style={styles.imageLogo}
            /> 
     </View>
     

     <View style={styles.viewOption}> 
     <View style={styles.nameChurchTextView}>
        <Text style={styles.nameChurchText}>Igreja Presbiteriana do Paranoá</Text>
    </View>
        <View style={styles.viewButtons}>
            
            <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Confissao')}>
            <Icon name="book" size={50} color="#ffff"/>
              <View style={styles.nameText}>
                <Text style={styles.text}>Confissão de fé W.M </Text>
              </View>
          
          </TouchableOpacity>
            
            <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Sobre')}>
            <FontAwesome name="info" size={50} color="#ffff"/>
              <View style={styles.nameText}>
                  <Text style={styles.text}>Sobre</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={()=> navigation.navigate('Departamentos')}>
              <Icon name="people" size={50} color="#ffff"/>
                <View style={styles.nameText}>
                    <Text style={styles.text}>Departamentos</Text>
                </View>
            </TouchableOpacity>

        </View>

        <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.buttons}>
            <FontAwesome name="pencil" size={50} color="#ffff"/>
            <View style={styles.nameText}>
              <Text style={styles.text}>Estudos</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons} >
        <FontAwesome name="table" size={50} color="#ffff"/>
            <View style={styles.nameText}>
                <Text style={styles.text}>Mesa{"\n"}Administrativa</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
        <Icons name="book" size={50} color="#ffff"/>
        <View style={styles.nameText}>
            <Text style={styles.text}>Catecismo Heildendeberg </Text>
         </View>
      </TouchableOpacity>

        </View>

        <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.buttons}>
              <Icons name="church" size={50} color="#fff"/>
              <View style={styles.nameText}>
                <Text style={styles.text}>Cultos</Text>
              </View>
          </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
                <Icon name="person" size={50} color="#ffff"/>
                <View style={styles.nameText}>
                    <Text style={styles.text}>Pastor</Text>
                </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
        <FontAwesome name="book" size={50} color="#ffff"/>
              <View style={styles.nameText}>
                 <Text style={styles.text}>História </Text>
              </View>
      </TouchableOpacity>

    </View>
     </View>

     
   

     </ImageBackground>


    </View>
  )
}

export default Home;


const styles = StyleSheet.create({
  container:{
   flex:1,
  },
  imageBack:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems: 'center',
    
    
  },
  viewImage:{
    width:'100%',
    height:165,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
   
   
  },
  imageLogo:{
   width:200,
   height:200,
   borderRadius:100,
   marginTop:100

  },
  viewOption:{
    backgroundColor:'#085530',
    width:380,
    height:390,
    marginTop:100,
    marginBottom:100,
    borderRadius:20,
    justifyContent: 'center',
    opacity:8
  

  },
  viewButtons:{
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around',
  
    marginBottom:40

  },
  buttons:{
    width:70,
    backgroundColor:'#4c956c',
    height:60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom:10,
    borderRadius:10,marginTop:10,
  },
  nameText:{
    display:'flex',
    width:78,
   
    
    justifyContent: 'flex-start',
    alignItems: 'baseline',
   
  },
  text:{
    position:'absolute',
   left:-7,
   top:8,
   marginBottom:65,
   fontSize:14,
   textAlign: 'center',
   color:'#FEFAFA',
   width:100,
   fontWeight:"bold",
   lineHeight:20
   
  },
  nameChurchText:{
    color:"#2c6e49", 
    
    fontWeight:"bold",
     fontSize:20,
    textAlign:'center'
  },
  nameChurchTextView:{
   
    bottom:65,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:'#ffff',
    width:300,
    left:40,
    borderRadius:10
  }

})