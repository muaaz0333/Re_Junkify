import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SuccessVerification = () => {
    const navigation = useNavigation();

  return (
    <View style={{flex:1,margin: 10, padding: 10 }}>
    <View style={{alignItems:'center', marginHorizontal: 107, marginTop:209 }}>
      <Image source={require ('../assets/Icons/success.png')}/>
      </View>

<View style={{marginTop:40}}>
    <Text style={{textAlign:'center', fontSize:25, color:'black', fontWeight:'700'}}>Congratulations!</Text>
</View>

<View style={{marginTop:8, marginHorizontal:24}}>
    <Text style={{textAlign:'center', fontSize:18}}>
        your account is complete, please enjoy the best menu from us.
    </Text>
</View>


<View style={{ marginTop: 40 }}>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <Text style={styles.btnstarted}>Get Started</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

export default SuccessVerification

const styles = StyleSheet.create({
    btnstarted: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 35,
        fontSize: 18,
        paddingVertical: 12,
        fontWeight: '600'
    },
})