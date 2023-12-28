import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


const SignIn1 = () => {
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
          Welcome Back <Image source={require('../assets/Icons/hand.png')} />
        </Text>
      </View>
      <View>
        <Text style={{ marginTop: 8, lineHeight: 24, fontSize: 15 }}>Sign to your account</Text>
      </View>

      <View>
        <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 26 }}>
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

      <View>
        <Text style={{ marginTop: 16, color: '#54408C', fontWeight: 'bold', fontSize: 15 }}>Forgot Password?</Text>
      </View>

      <View style={{ marginTop: 24 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btncontinue} >Login</Text></TouchableOpacity>
      </View>

      <View style={{marginTop:24}}>
        <View style={{flexDirection:'row', alignSelf:'center'}}>
          <Text style={{color:'#A6A6A6', fontSize:15}}>Don't have an account?</Text>
          <Text style={{color:'#54408C', fontSize:15, fontWeight:'bold'}} onPress={()=>navigation.navigate('Signup')}> Sign Up</Text>
        </View>
      </View>


<View style={{flexDirection:'row', marginTop:26, alignItems:'center'}}>
  <View style={{borderBottomWidth:.5, borderBottomColor:'#A6A6A6', flex:1}}></View>
  <Text style={{paddingVertical:10,paddingHorizontal:7 , color:'#A6A6A6', fontSize:15}}>Or with</Text>
  <View style={{borderBottomWidth:.5, borderBottomColor:'#A6A6A6', flex:1}}></View>
</View>


<View style={{ marginTop: 24 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btngoogle} ><Image source={require('../assets/Icons/Google.png')}/><Text>    Sign in with Google</Text></Text></TouchableOpacity>
      </View>

      <View style={{ marginTop: 8 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btngoogle} ><Image source={require('../assets/Icons/Apple.png')}/><Text>     Sign in with Apple</Text></Text></TouchableOpacity>
      </View>

    </View>
  )
}

export default SignIn1

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
    fontWeight:'400'
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