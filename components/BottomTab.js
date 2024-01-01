import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'




const BottomTab = () => {
  return (
    <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
      
      
      <View style={{alignItems:'center'}}>
        <Image source={require("../assets/Icons/Home-Fill.png")}/>
        <Text>Home</Text>
      </View>

      <View style={{alignItems:'center'}}>
      <Image source={require("../assets/Icons/category.png")}/>
        <Text>Category</Text>
      </View>

      <View style={{alignItems:'center'}}>
      <Image source={require("../assets/Icons/Cart.png")}/>
        <Text>Cart</Text>
      </View>

      <View style={{alignItems:'center'}}>
      <Image source={require("../assets/Icons/Profile.png")}/>
        <Text>Profile</Text>
      </View>
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})