import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

const EnterPhone = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, margin: 10, padding: 10 }}>
            <View style={{ alignSelf: 'flex-start', marginTop: 13 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { navigation.navigate("VerificationEmail") }}>
                    <Image source={require('../assets/Icons/Arrow_Left.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 23, color: "#121212", fontWeight: 'bold', marginTop: 29, lineHeight: 27, }}>Phone Number</Text>
                <Text style={{ marginVertical: 8, fontSize: 15, color: '#A6A6A6', marginHorizontal: 24, textAlign: 'center' }}>Please enter your phone number, so we can more easily deliver your order</Text>
            </View>

            <View style={{ marginTop: 24 }}>
                <Text style={{ color: 'black', fontWeight: '700', fontSize: 15 }}>Phone Number</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7E9', borderRadius: 10, marginTop: 6 }}>
                    <Image style={{ marginHorizontal: 12, marginVertical: 12 }} source={require('../assets/Icons/Call.png')} />
                    <TextInput inputMode='numeric' style={{ fontSize: 17, color: 'black', fontWeight: '600' }}>+92 333 4246144</TextInput>
                </View>
            </View>




            <View style={{ marginTop: 43 }}>
                <TouchableOpacity onPress={()=>navigation.navigate('VerificationPhone')}>
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