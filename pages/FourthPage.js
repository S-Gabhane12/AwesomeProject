import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Text, Image } from 'react-native';

const FourthPage = (navigation) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // Move focus to the next box if the current one has a value
    if (value && index < newOtp.length - 1) {
      this.inputs[index + 1].focus();
    }
  };
  const inputs = [];

  function ColorfulText({children}) {
    return <Text style={{color: '#7B2CBF'}}>{children}</Text>;
  }

  return (
    <View style={styles.container}>
      <View>
      <View style={styles.box1}>
      <Image source={require('../Frame.png')} style={{width:30, height:30}}></Image>
      <Text style={styles.text1}>TexlaCulture</Text>
      </View>
   <Text style={styles.text2}>Verify Your Mobile Number</Text>
   <Text style={styles.text3}>Please enter code sent to your mobile number ending with ******3848</Text>
   </View>
   <View style={styles.container1}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.box}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleOtpChange(value, index)}
          value={digit}
          ref={(input) => {
            inputs[index] = input;
          }}
        />
      ))}
     
      </View>
      <Text style={{marginLeft:-100, fontSize:12, fontWeight:"700", lineHeight:16.37}}>Didn't recieve the code? <ColorfulText>Resend OTP 0:10sec</ColorfulText></Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
    
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:-60
    
  }, 
  text1:{
    color:"#5A189A",
    fontSize: 22,
    lineHeight:27.5,
    fontWeight:'600',
    marginTop:5
    
},
text2:{
    color:"#212B36",
    fontWeight:"700",
    lineHeight:33.6,
    textAlign:'left',
    fontSize:28,
    marginLeft:-20,
    marginTop:15,
   
},
text3:{
  
   color:'#454F5B',
   fontSize:12,
    marginLeft:-20,
    marginTop:1,
    lineHeight:16.37,
    fontWeight:'700',
    width:230,
    marginBottom:10,

},
  box: {
    borderWidth: 1,
    borderColor: '#919EAB',
    width: "10%",
    height: 40,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 8,
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
    },

  box1: {
    flexDirection:'row',
    marginLeft:-20,
    marginTop:80
  },
});
export default FourthPage;
