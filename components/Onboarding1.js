import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Onboarding1 = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignSelf: 'flex-start', marginTop:10 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { }}>
                    <Text style={{ fontSize: 15, color: "#54408C", lineHeight: 20, fontFamily: 'Roboto' }}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image source={require("../assets/Onboarding/onboarding1.png")} style={{ alignSelf: "center" }} />
            </View>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center", marginTop: 10 }}>Now reading books</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center" }}>will be easier</Text>


            <Text style={{ fontSize: 15, color: "#A6A6A6", textAlign: "center", marginTop: 13, marginLeft: 42, marginRight: 41, paddingLeft: 25, paddingRight: 24, lineHeight: 25 }}>
                Discover new worlds, join a vibrant reading community. Start your reading adventure effortlessly with us.
            </Text>


            <View style={{ marginTop: 35, flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                <View style={{ height: 9, width: 9, color: '#54408C', borderRadius: 4, backgroundColor: '#54408C' }}></View>
                <View style={{ height: 6, width: 6, color: '#54408C', borderRadius: 3, backgroundColor: 'silver', marginLeft: 2 }}></View>
                <View style={{ height: 6, width: 6, color: '#54408C', borderRadius: 3, backgroundColor: 'silver', marginLeft: 2 }}></View>
            </View>

            <View style={{ marginTop: 35 }}>
                <TouchableOpacity onPress={()=> navigation.navigate("Onboarding2")}><Text style={styles.btncontinue} >Continue</Text></TouchableOpacity>
            </View>


            <View style={{ marginTop: 8 }}>
                <TouchableOpacity  onPress={()=>navigation.navigate("SignIn1")}><Text style={{textAlign: 'center', marginLeft: 24,marginRight: 24, color: '#54408C',fontSize: 18,paddingVertical: 16, fontWeight:'bold'
                }}>Sign in</Text></TouchableOpacity>
            </View>

            {/* <View style={{marginTop:22}}>
    <TouchableOpacity style={{}}><Text style={{color:'#54408C', fontWeight:'bold', fontSize:17, textAlign:'center'}}>Sign in</Text></TouchableOpacity>
</View> */}
        </View>
    )
}

export default Onboarding1

const styles = StyleSheet.create({
    skiptxt: {
        margin: 20,
        padding: 10,
    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        marginLeft: 24,
        marginRight: 24,
        color: 'white',
        borderRadius: 12,
        fontSize: 20,
        paddingVertical:16,
    }
})