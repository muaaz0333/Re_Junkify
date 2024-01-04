import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';


const HomeSetMap = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1, marginHorizontal:24}}>
      

  {/* home app bar */}
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, }}>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>Location</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Image source={require("../assets/Icons/Notification.png")} />
                </TouchableOpacity>
            </View>


    </View>
  )
}

export default HomeSetMap

const styles = StyleSheet.create({})