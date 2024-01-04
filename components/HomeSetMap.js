import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal, TextInput } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MapView from 'react-native-maps';


const HomeSetMap = () => {
  const navigation = useNavigation();
  const [locationModal, setLocationModal] = useState(true);

  return (
    <View style={{ flex: 1, marginHorizontal: 24 }}>


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

      <View style={{ marginTop: 10, borderRadius: 20, width: '100%', height: '30%' }}>
        <MapView
        onPress={()=>setLocationModal(!locationModal)}
          style={{ height: '100%', width: '100%', }}
          initialRegion={{
            latitude: 31.5204,
            longitude: 74.3587,
            latitudeDelta: 31.5204,
            longitudeDelta: 74.3587,
          }}
        />
      </View>

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={locationModal}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 310, elevation: 10, borderTopLeftRadius: 50, borderTopRightRadius: 50, }}>
              <View style={{ marginTop: 16, marginHorizontal: 24 }}>
                <View>
                  <TouchableOpacity onPress={() => { setLocationModal(!locationModal) }}>
                    <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 19, color: 'black', fontWeight: '700' }}>
                    Detail Address
                  </Text>
                  <Image source={require('../assets/Icons/GPS-Fill.png')} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 22, }}>
                  <View style={{ backgroundColor: '#FAF9FD', width: 36, height: 36, alignItems: 'center', justifyContent: 'center', borderRadius: 16 }}>
                    <Image style={{ width: 26, height: 26 }} source={require('../assets/Icons/Location.png')} />
                  </View>
                  <View style={{ marginHorizontal: 16, flex: 1 }}>
                    <Text style={{ fontWeight: '700', color: 'black', fontSize: 16 }}>
                      Utama Street N.20
                    </Text>
                    <Text style={{ fontSize: 15, fontWeight: '400', }}>
                      Dumbo Street No.20, Dumbo, New York 10001, United States
                    </Text>

                  </View>
                </View>

                <View style={{ width: 350, height: 1, backgroundColor: 'silver', marginTop: 28 }}></View>
                <View style={{ marginTop: 19 }}>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: '700' }}>
                    Save Address As
                  </Text>
                </View>

                <View style={{flexDirection:'row',marginTop:16 }}>
                  <TouchableOpacity>
                    <Text style={{color:'#54408C', backgroundColor:'#FAF9FD',paddingVertical:8, paddingHorizontal:16, borderRadius:20, fontSize:15 }}>
                      Home
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={{marginLeft:20}}>
                    <Text style={{color:'silver', backgroundColor:'white',paddingVertical:8, paddingHorizontal:16, borderRadius:20, fontSize:15, borderColor:'silver', borderWidth:1 }}>
                      Offices
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop:92}}>
                  <TouchableOpacity onPress={()=>navigation.navigate("HomeSetLocation")}>
                    <Text style={styles.confirmationbtn}>
                      Confirmation
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </View>
        </Modal>
      </View>


    </View>
  )
}

export default HomeSetMap

const styles = StyleSheet.create({
  confirmationbtn: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    backgroundColor: '#54408C',
    paddingVertical: 12,
    borderRadius: 30,
    fontWeight: '600'
}
})