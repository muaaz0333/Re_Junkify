import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeSearch = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 23, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginRight: 147 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Search</Text>
                </View>
            </View>

            <View style={{marginTop:23, marginHorizontal:24}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5E7E9', borderRadius: 10, marginTop: 6 }}>
                    <Image style={{ marginHorizontal: 12, marginVertical: 12 , tintColor:'grey', width:28, height:28}} source={require('../assets/Icons/Search.png')} />
                    <TextInput onChangeText={(text)=>setPhone(text)} placeholder='Search'  style={{ fontSize: 17, color: 'black', fontWeight: '600' }}/>
                </View>
            </View>

            <View style={{marginHorizontal:24, marginTop:23}}>
                <Text style={{fontSize:17, color:'black', fontWeight:'700'}}>
                    Recent Searches
                </Text>
            </View>

        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({})