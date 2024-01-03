import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BottomTab from './BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const categoryBooks = [
  {
    id: '1',
    pic: require('../assets/Images/categoryBook1.png'),
    title: 'The Da vinci Code',
    price: '19.99',
    vendor: require('../assets/Images/VFrame1.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '2',
    pic: require('../assets/Images/categoryBook2.png'),
    title: 'Carrie Fisher',
    price: '27.12',
    vendor: require('../assets/Images/VFrame2.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(5.0)',
    ratingStars: 5,
  },
  {
    id: '3',
    pic: require('../assets/Images/categoryBook3.png'),
    title: 'The Good Sister',
    price: '27.12',
    vendor: require('../assets/Images/VFrame3.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(2.0)',
    ratingStars: 2,
  },
  {
    id: '4',
    pic: require('../assets/Images/categoryBook4.png'),
    title: 'Where are you',
    price: '27.12',
    vendor: require('../assets/Images/VFrame4.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
  {
    id: '5',
    pic: require('../assets/Images/categoryBook5.png'),
    title: 'Bright',
    price: '18',
    vendor: require('../assets/Images/VFrame5.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(3.0)',
    ratingStars: 3,
  },
  {
    id: '6',
    pic: require('../assets/Images/categoryBook6.png'),
    title: 'Zombie Spacesuit',
    price: '14.99',
    vendor: require('../assets/Images/VFrame6.png'),
    about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
    rating: '(4.0)',
    ratingStars: 4,
  },
]



const Category = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginHorizontal: 24 }}>
        <TouchableOpacity onPress={()=>{navigation.navigate("CategorySearch")}}>
          <Image source={require("../assets/Icons/Search.png")} style={{ tintColor: 'black' }} />
        </TouchableOpacity>


        <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Category</Text>
        <TouchableOpacity>
          <Image source={require("../assets/Icons/Notification.png")} />
        </TouchableOpacity>

      </View>


      <Tab.Navigator
        initialRouteName='All'
        tabBarActiveTintColor='#54408C'

        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
          },
          // tabBarItemStyle: {width: 140,},
        }}>
        <Tab.Screen name="All" component={All} options={{ tabBarStyle: { backgroundColor: 'white', }, tabBarItemStyle: { width: 140, }, }} />
        <Tab.Screen name="Novels" component={Novels} />
        <Tab.Screen name="Self Love" component={SelfLove} />
        <Tab.Screen name="Science" component={Science} />
        <Tab.Screen name="Romantic" component={Romantic} />
      </Tab.Navigator>




      <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
        <BottomTab />
      </View>
    </View>
  )
}

const All = () => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ marginTop: 0, marginBottom:70 }}>
        <FlatList
          data={categoryBooks}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <View style={{ marginLeft: 0, marginTop: 0 }}>
                <View style={{ marginLeft: 24, marginTop: 40 }}>
                  <View>
                    <Image style={{ width: 165, height: 175, resizeMode: 'contain', borderRadius: 10 }} source={item.pic} />
                  </View>
                  <View>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: '700', marginTop:8 }}>
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700', marginTop:4 }}>
                      ${item.price}
                    </Text>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>



      {/* <View style={{ marginLeft: 24, marginTop: 40 }}>
        <View>
          <Image style={{ width: 165, height: 175, resizeMode: 'center', borderRadius: 10 }} source={require('../assets/Images/categoryBook1.png')} />
        </View>
        <View>
          <Text style={{ color: 'black', fontSize: 17, fontWeight: '700' }}>
            The Da vinci Code
          </Text>
        </View>
        <View>
          <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '700' }}>
            $19.99
          </Text>
        </View>
      </View> */}

    </View>
  )
}
const Novels = () => {
  return (
    <View>
      <Text>
        Novels
      </Text>
    </View>
  )
}
const SelfLove = () => {
  return (
    <View>
      <Text>
        Self Love
      </Text>
    </View>
  )
}
const Science = () => {
  return (
    <View>
      <Text>
        Science
      </Text>
    </View>
  )
}
const Romantic = () => {
  return (
    <View>
      <Text>
        Romantic
      </Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})