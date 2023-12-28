import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, margin: 20, padding: 10, }}>
          <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
            <TouchableOpacity style={styles.skiptxt} onPress={() => {navigation.navigate('Onboarding3') }}>
              <Image source={require('../assets/Icons/Arrow_Left.png')} />
            </TouchableOpacity>
          </View>
    
          <View>
            <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 25, lineHeight: 27 }}>
              Sign Up
            </Text>
          </View>
          <View>
            <Text style={{ marginTop: 8, lineHeight: 24, fontSize: 15 }}>Create account and choose favorite menu</Text>
          </View>
    
          <View>
            <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 26 }}>
              Name
            </Text>
          </View>
          <View>
            <TextInput
              placeholder='Your Name'
              style={{ color: '#B8B8B8', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
            />
          </View>

          <View>
            <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 16 }}>
              Email
            </Text>
          </View>
    
          <View>
            <TextInput
              placeholder='Your Email'
              style={{ color: '#B8B8B8', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
            />
          </View>
    
          <View>
            <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 16 }}>
              Password
            </Text>
          </View>
    
          <View>
            <TextInput
              placeholder='Your Password'
              secureTextEntry={true}
              style={{ color: '#B8B8B8', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
              
            />
          </View>
    
    
          <View style={{ marginTop: 24 }}>
            <TouchableOpacity onPress={() => { }}><Text style={styles.btncontinue} >Register</Text></TouchableOpacity>
          </View>
    
          <View style={{marginTop:24}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
              <Text style={{color:'#A6A6A6', fontSize:16, fontWeight:'600'}}>Have an account?</Text>
              <Text style={{color:'#54408C', fontSize:16, fontWeight:'700'}} onPress={()=>navigation.navigate('SignIn1')}> Sign In</Text>
            </View>
          </View>
    
    <View style={{marginTop:138}}>
        <Text style={{textAlign:'center', color:'#A6A6A6', fontSize:15, fontWeight:'500'}}>
            By clicking Register, you agree to our
        </Text>
        <Text style={{textAlign:'center', color:'#54408C', fontSize:16, fontWeight:'600'}}>
            Terms and Data Policy
        </Text>
    </View>

    
        </View>
      )
}

export default Signup

const styles = StyleSheet.create({
    skiptxt: {
  
    },
    btncontinue: {
      backgroundColor: '#54408C',
      textAlign: 'center',
      // marginLeft: 24,
      // marginRight: 24,
      color: 'white',
      borderRadius: 35,
      fontSize: 18,
      paddingVertical: 12,
      fontWeight:'600'
    },
    btngoogle:{
      borderColor:'#E8E8E8',
      color:'#121212',
      textAlign: 'center',
      borderRadius: 40,
      fontSize: 16,
      paddingVertical: 12,
  paddingHorizontal:85,
  borderWidth:2.5
    }
  })