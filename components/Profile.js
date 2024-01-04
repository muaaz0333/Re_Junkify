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

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 21, textAlign: 'center', fontWeight: '700', color: 'black' }}>
          Profile
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 25, borderTopWidth: 1, borderBottomWidth: 1, paddingVertical: 16, borderColor: 'silver', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image style={{ width: 68, height: 68, borderRadius: 34 }} source={require('../assets/Images/Author7.png')} />
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Anna Doe</Text>
            <Text style={{ fontSize: 16, color: 'grey' }}>+92 333 4246144</Text>
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn1")}>
            <Text style={{ color: '#EF5A56', fontSize: 16, fontWeight: '700' }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>





      <TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/profileicon.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>My Account</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/Location.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Address</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/offerspromos.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Offers & Promos</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/heart.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Your Favourites</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/orderhistory.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Order History</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>




      <TouchableOpacity>

        <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: 0, width: '100%', paddingVertical: 20, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 50 }}>
              <Image style={{ width: 25, height: 25, borderRadius: 30, resizeMode: 'contain', tintColor: '#54408C' }} source={require('../assets/Icons/helpcenter.png')} />
            </View>
            <View style={{ marginLeft: 16 }}>
              <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>Help Center</Text>
            </View>
          </View>

          <View style={{}}>
            <View>
              <Image source={require('../assets/Icons/nextarrow.png')} />
            </View>
          </View>
        </View>
      </TouchableOpacity>





      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})