import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const Vendors = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Vendors</Text>
                <TouchableOpacity>
                    <Image source={require("../assets/Icons/Search.png")} />
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 16, marginLeft: 24 }}>
                <Text style={{ fontSize: 16, }}>
                    Our Vendors
                </Text>
            </View>

            <View style={{ marginLeft: 24, marginBottom: 10 }}>
                <Text style={{ fontSize: 21, color: '#54408C', fontWeight: '700' }}>
                    Vendors
                </Text>
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
                <Tab.Screen name="Books" component={Books} />
                <Tab.Screen name="Poems" component={Poems} />
                <Tab.Screen name="Special for you" component={SpecialForYou} />
                <Tab.Screen name="Stationary" component={Stationary} />
            </Tab.Navigator>


        </View>
    )
}

const All = () => {
    return (
        <View style={{ flex: 1 }}>
            {/*         
        <View style={{ marginTop: 12, marginLeft: 23 }}>
                    <FlatList
                        data={vendordetails}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={itemsss => itemsss.id}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ backgroundColor: '#E5E7E9', height: 80, width: 80, marginRight: 15, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 67, height: 50, resizeMode: 'contain' }}
                                        source={item.image} />
                                </View>
                            )
                        }}
                    />
                </View> */}


            <View style={{ backgroundColor: '#E5E7E9', height: 101, width: 101, marginRight: 15, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{ width: 90, height: 68, resizeMode: 'contain' }}
                    source={require('../assets/Images/Frame1.png')} />
            </View>
            <View style={{ marginTop: 8 }}>
                <Text style={{ fontSize: 17 }}>Wattpad</Text>
            </View>
            <View>

            </View>


        </View>
    )
}

const Books = () => {
    return (
        <View>
            <Text>
                Books
            </Text>
        </View>
    )
}

const Poems = () => {
    return (
        <View>
            <Text>
                Poems
            </Text>
        </View>
    )
}

const SpecialForYou = () => {
    return (
        <View>
            <Text>
                Special For you
            </Text>
        </View>
    )
}

const Stationary = () => {
    return (
        <View>
            <Text>
                Stationary
            </Text>
        </View>
    )
}



export default Vendors

const styles = StyleSheet.create({})