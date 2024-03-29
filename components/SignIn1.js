import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const SignIn1 = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginFn = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        if (email === '' && password === '') {
          Alert.alert("Please Enter Email and Password")
        }
        // console.log(res)
        Alert.alert("Logged In")
        navigation.navigate("Home")
      })
      .catch((err) => {
        console.log(err)
        Alert.alert(err.code)
      })
  }

  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true)

  const OnLoginHandler = () => {

    navigation.navigate("Home")
  }

  return (
    <View style={{ flex: 1, margin: 20, padding: 10, }}>
      <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
        <TouchableOpacity style={styles.skiptxt} onPress={() => { }}>
          <Image source={require('../assets/Icons/Arrow_Left.png')} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 25, lineHeight: 27 }}>
          Welcome Back <Image source={require('../assets/Icons/hand.png')} />
        </Text>
      </View>
      <View>
        <Text style={{ marginTop: 8, lineHeight: 24, fontSize: 15, color: 'grey' }}>Sign to your account</Text>
      </View>

      <View>
        <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 26 }}>
          Email
        </Text>
      </View>

      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder='Your Email'
          inputMode='email'
          placeholderTextColor={"grey"}
          style={{ color: 'black', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 12, paddingHorizontal: 16 }}
        />
      </View>

      <View>
        <Text style={{ color: '#121212', fontSize: 15, fontWeight: 'bold', marginTop: 16 }}>
          Password
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 10, marginTop: 6, backgroundColor: '#FAFAFA', paddingVertical: 3, paddingHorizontal: 16 }}>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder='********'
          placeholderTextColor={"grey"}
          secureTextEntry={isSecureEntry}
          style={{ flex: 1, color: 'black', }}

        />
        <TouchableOpacity onPress={() => setIsSecureEntry((prev) => !prev)}>
          {
            isSecureEntry ? <Image source={require('../assets/Icons/Phide.png')} /> : <Image source={require('../assets/Icons/Pshow.png')} />
          }
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ marginTop: 16, color: '#54408C', fontWeight: 'bold', fontSize: 15 }}>Forgot Password?</Text>
      </View>

      <View style={{ marginTop: 22 }}>
        <TouchableOpacity onPress={() => loginFn()}><Text style={styles.btncontinue} >Login</Text></TouchableOpacity>
      </View>

      <View style={{ marginTop: 22 }}>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={{ color: 'grey', fontSize: 15 }}>Don't have an account?</Text>
          <Text style={{ color: '#54408C', fontSize: 15, fontWeight: 'bold' }} onPress={() => navigation.navigate('Signup')}> Sign Up</Text>
        </View>
      </View>


      <View style={{ flexDirection: 'row', marginTop: 22, alignItems: 'center' }}>
        <View style={{ borderBottomWidth: .5, borderBottomColor: 'grey', flex: 1 }}></View>
        <Text style={{ paddingVertical: 10, paddingHorizontal: 7, color: 'grey', fontSize: 15 }}>Or with</Text>
        <View style={{ borderBottomWidth: .5, borderBottomColor: 'grey', flex: 1 }}></View>
      </View>


      <View style={{ marginTop: 22 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btngoogle} ><Image source={require('../assets/Icons/Google.png')} /><Text>    Sign in with Google</Text></Text></TouchableOpacity>
      </View>

      <View style={{ marginTop: 8 }}>
        <TouchableOpacity onPress={() => { }}><Text style={styles.btngoogle} ><Image source={require('../assets/Icons/Apple.png')} /><Text>     Sign in with Apple</Text></Text></TouchableOpacity>
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
    fontWeight: '400'
  },
  btngoogle: {
    borderColor: '#E8E8E8',
    color: '#121212',
    textAlign: 'center',
    borderRadius: 40,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderWidth: 2.5
  }
})