import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const EnterPhone = () => {
    const navigation = useNavigation();
    const[phone, setPhone]=useState();
    
    const contbtn=()=>{
        setPhone("")
        navigation.navigate('VerificationPhone',{phone:phone})

    }

    return (
        <View style={{ flex: 1, margin: 24 }}>
            <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { navigation.navigate("VerificationEmail") }}>
                    <Image source={require('../assets/Icons/Arrow_Left.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 29, lineHeight: 27, }}>Phone Number</Text>
                <Text style={{ marginVertical: 19, fontSize: 15, color: 'grey', marginHorizontal: 2, textAlign: 'center' }}>Please enter your phone number, so we can more easily deliver your order</Text>
            </View>

            <View style={{ marginTop: 22 }}>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>Phone Number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7E9', borderRadius: 10, marginTop: 8 }}>
                    <Image style={{ marginHorizontal: 12, marginVertical: 12 }} source={require('../assets/Icons/Call.png')} />
                    <TextInput onChangeText={(text)=>setPhone(text)} inputMode='numeric' placeholderTextColor={"grey"} placeholder='+92 333 4246144  ' value={phone} style={{ fontSize: 17, color: 'black', fontWeight: '600' }}/>
                </View>
            </View>




            <View style={{ marginTop: 43 }}>
                <TouchableOpacity onPress={()=>contbtn()}>
                    <Text style={styles.btncontinue}>Continue</Text>
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default EnterPhone

const styles = StyleSheet.create({
    btncontinue: {
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