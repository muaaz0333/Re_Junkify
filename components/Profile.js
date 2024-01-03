import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 66 }}>
        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '700', color: 'black' }}>
          Profile
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal:25, marginTop:25, borderTopWidth:1, borderBottomWidth:1,paddingVertical:16, borderColor:'silver' }}>
        <View>
          <Image style={{ width: 60, height: 60, borderRadius: 30 }} source={require('../assets/Images/Author7.png')} />
        </View>
        <View style={{ marginLeft: 16 }}>
          <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Anna Doe</Text>
          <Text style={{ fontSize: 16, color: 'grey' }}>+92 333 4246144</Text>


        </View>
        <View style={{ marginLeft: 100 }}>
          <TouchableOpacity onPress={()=>navigation.navigate("SignIn1")}>
            <Text style={{ color: '#EF5A56', fontSize: 16, fontWeight: '700' }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})