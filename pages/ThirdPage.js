import React, {  useRef } from "react";


import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text, TouchableOpacity, TextInput
} from "react-native";
import PhoneInput from "react-native-phone-input";

const ThirdPage = ({ navigation }) => {
  const phoneInput = useRef(null);

  function ColorfulText({ children }) {
    return <Text style={{ color: '#7B2CBF' }}>{children}</Text>;
  }

  return <SafeAreaView style={styles.container}>
    <View>
      
      <View style={styles.box1}>
      <Image source={require('../Frame.png')} style={{width:30, height:30}}></Image>
      <Text style={styles.text1}>TexlaCulture</Text>
      </View>
      <Text style={styles.text2}>Mobile Number</Text>
      <Text style={styles.text3}>We,ll send you a one-time verification code.</Text>
    </View>
      <View style={styles.box}>
      <PhoneInput 
      
             initialCountry={'in'}
            
             style={styles.phoneInput} />
   <TextInput style={styles.phoneInput1} placeholder="Enter you Mobile here" />
    </View>  
    <View style={{marginLeft:10}}>    
    <Text  >By Continuing, I agree to the <ColorfulText>Terms of Use & Privacy Policy</ColorfulText></Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FourthPage', { name: 'FourthPage' })}
      >
        <Text style={styles.text}>Get OTP</Text>
      </TouchableOpacity>
       <Text>Having Trouble Logging in?  <ColorfulText>Get Help</ColorfulText></Text>
       </View>
  </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text1: {
    color: "#5A189A",
    fontSize: 22,
    lineHeight: 27.5,
    fontWeight: '600',
    marginTop:5

  },
  text2: {
    color: "#212B36",
    fontWeight: "700",
    lineHeight: 33.6,
    textAlign: 'left',
    fontSize: 28,
    marginLeft: -90,
    marginTop: 15,
    //  fontFamily:'NunitoSans'
  },
  text3: {
    // fontFamily:'NunitoSans',
    color: '#454F5B',
    fontSize: 14,
    marginLeft: -90,
    marginTop: 1,
    lineHeight: 19.1,
    fontWeight: '700',
    marginBottom: 10,

  },
  phoneContainer: {
    width: '75%',
    height: 50,

  },
  text4: {
    borderWidth: 5,
    padding: 20,
    margin: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "yellow"
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    margin : 10
  },
  button: {
    backgroundColor: "#7B2CBF",
    height: 40,
    width: 300,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    margin: 10,
    marginLeft:1


  },

  box: {
    flexDirection:'row',
    marginLeft:-15
    
  },
  box1: {
    flexDirection:'row',
    marginLeft:-90,
    marginTop:80
    
  },
  phoneInput: { 
    height: 50, 
    width: '25%', 
    borderWidth: 1, 
    borderColor: '#919EAB', 
    marginBottom: 20, 
    paddingHorizontal: 8,
    borderBottomStartRadius: 14,
    borderBottomEndRadius: 14,
    borderTopEndRadius: 14,
    borderTopStartRadius: 14,
    marginRight:10
},
phoneInput1: { 
  marginRight:10,
  height: 50, 
  width: '50%', 
  borderWidth: 1, 
  borderColor: '#919EAB', 
  marginBottom: 20, 
  paddingHorizontal: 10, 
  borderTopRightRadius: 14,
  borderBottomRightRadius: 14,
  borderTopLeftRadius: 14,
  borderBottomLeftRadius: 14,
},

});


export default ThirdPage