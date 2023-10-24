import * as React from 'react';
import {StyleSheet, TouchableOpacity, View, Text,Image } from 'react-native';


const FirstPage = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <Image source={require('../collaboration1.png')}></Image>
      <Text style={styles.text1}>Simplify HR Tasks</Text>
      <Text style={styles.text2}>TexlaCulture's People Care System is designed to Manage your HR tasks.</Text>
     
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('Second', { name: 'Second Page' })}
 >
  <Text style={styles.text}>Next</Text>
</TouchableOpacity>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:'#d3d5db'
   },
   text1:{
     color:"black",
     fontWeight:"bold",
     fontSize: 28,
     lineHeight:35,
     marginTop:100
 },
 text2:{
     color:"#4A4A4A",
     textAlign:"justify",
     fontSize:16,
     lineHeight:20.8,
     width:240,
     textAlign:"center",
     marginBottom:100
 }, 
 text: {
   fontSize: 16,
   fontWeight: 'bold',
   color:"white",
   textAlign:"center",
   margin:10
},
button:{
   backgroundColor:"#7B2CBF",
   height:40,
   width:300,
   borderBottomStartRadius:10,
   borderBottomEndRadius:10,
   borderTopEndRadius:10,
   borderTopStartRadius:10,
   
   

},

 }); 
 
 
export default FirstPage;