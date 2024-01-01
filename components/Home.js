import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import Category from './Category';
import Cart from './Cart';
import Profile from './Profile';
import { Card } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/styles/colors';
import { useNavigation } from '@react-navigation/native';
import BottomTab from './BottomTab';


const { height, width } = Dimensions.get('window')
// const width = dimensions.width;
// const imageHeight = dimensions.height;

const Tab = createMaterialBottomTabNavigator();

const itemss = [
    {
        id: '1',
        image: require('../assets/Images/imageslider.png'),
        title: 'Special Offer',
        subtitle: '25',

    },
    {
        id: '2',
        image: require('../assets/Images/book.jpg'),
        title: 'Premium Offer',
        subtitle: '30',
    },
    {
        id: '3',
        image: require('../assets/Images/image3.png'),
        title: 'Normal Offer',
        subtitle: '20',
    },
];

const bookdetails = [
    {
        id: '1',
        pic: require('../assets/Images/book1.png'),
        detail: 'The Kite Runner',
        price: '14.99'
    },
    {
        id: '2',
        pic: require('../assets/Images/book3.jpg'),
        detail: 'The Kite Runner',
        price: '19.99'
    },
    {
        id: '3',
        pic: require('../assets/Images/image3.png'),
        detail: 'The Kite Runner',
        price: '34.99'
    },
    {
        id: '4',
        pic: require('../assets/Images/book4.jpg'),
        detail: 'The Kite Runner',
        price: '24.99'
    },
    {
        id: '5',
        pic: require('../assets/Images/book1.png'),
        detail: 'The Kite Runner',
        price: '18'
    },
    {
        id: '6',
        pic: require('../assets/Images/book.jpg'),
        detail: 'The Kite Runner',
        price: '14.99'
    },
    {
        id: '7',
        pic: require('../assets/Images/imageslider.png'),
        detail: 'The Kite Runner',
        price: '112.99'
    },
]

const vendordetails = [
    {
        image: require('../assets/Images/Frame.png')
    },
    {
        image: require('../assets/Images/Frame1.png')
    },
    {
        image: require('../assets/Images/Frame2.png')
    },
    {
        image: require('../assets/Images/Frame3.png')
    },
    {
        image: require('../assets/Images/Frame.png')
    },
    {
        image: require('../assets/Images/Frame1.png')
    },
    {
        image: require('../assets/Images/Frame2.png')
    },
]

const authorDetails = [
    {
        id: '1',
        pic: require('../assets/Images/Author7.png'),
        name: 'Anna',
        Designation: 'Writer'
    },
    {
        id: '2',
        pic: require('../assets/Images/Author1.png'),
        name: 'Tess Gunty',
        Designation: 'Novelist'
    },
    {
        id: '3',
        pic: require('../assets/Images/Author2.png'),
        name: 'Richard',
        Designation: 'Writer'
    },
    {
        id: '4',
        pic: require('../assets/Images/Author3.png'),
        name: 'John Dree',
        Designation: 'Composer'
    },
    {
        id: '5',
        pic: require('../assets/Images/Author4.png'),
        name: 'Nina',
        Designation: 'Writer'
    },
    {
        id: '6',
        pic: require('../assets/Images/Author5.png'),
        name: 'Lucy',
        Designation: 'Writer'
    },
    {
        id: '7',
        pic: require('../assets/Images/Author6.png'),
        name: 'AB John',
        Designation: 'Writer'
    },
]


const Home = () => {
    const [data, setData] = useState([1, 2, 3]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, }}>


            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginHorizontal: 24 }}>
                <TouchableOpacity>
                    <Image source={require("../assets/Icons/Search.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Home</Text>
                <TouchableOpacity>
                    <Image source={require("../assets/Icons/Notification.png")} />
                </TouchableOpacity>

            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Slider with flatlist */}
                <View style={{ marginTop: 14 }}>
                    <FlatList
                        data={itemss}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            setCurrentIndex((x / width).toFixed(0));
                        }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ width: width / 1.2, backgroundColor: '#FAF9FD', elevation: 5, borderRadius: 8, flexDirection: 'row', marginTop: 16, alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30 }}>
                                    <View style={{ flex: 1, }}>
                                        <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', paddingLeft: 23 }}>{item.title}</Text>
                                        <Text style={{ fontSize: 18, color: 'black', paddingLeft: 23 }}>Discount {item.subtitle}%</Text>
                                        <TouchableOpacity style={{ paddingLeft: 23, alignSelf: 'flex-start', marginTop: 14, }}>
                                            <Text style={[styles.btnordernow, { alignItems: 'center' }]}>Order Now</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={item.image} />
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                        {
                            data.map((item, index) => {
                                return (
                                    <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: currentIndex == index ? '#54408C' : 'gray', marginLeft: 5 }}>

                                    </View>
                                )
                            })
                        }
                    </View>
                </View>


                {/*  books flatlist */}
                <View style={{ marginTop: 27, marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>Top of Week</Text>
                    <TouchableOpacity onPress={() => { { } }}>
                        <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '800' }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ marginTop: 16 }}>
                    <FlatList
                        data={bookdetails}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={itemsss => itemsss.id}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ marginLeft: 24, marginTop: 16 }}>
                                    <Image style={styles.image2} source={item.pic} />
                                    <Text style={{ marginTop: 1, fontSize: 15, color: 'black', fontWeight: '700' }}>{item.detail}</Text>
                                    <Text style={{ color: '#54408C', fontWeight: '700' }}>${item.price}</Text>
                                </View>
                            )
                        }}
                    />
                </View>



                {/* Best Vendors */}
                <View style={{ marginTop: 32, marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>Best Vendors</Text>
                    <TouchableOpacity onPress={() => { { navigation.navigate("Vendors") } }}>
                        <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '800' }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16, marginLeft: 23 }}>
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
                </View>




                {/* Authors */}
                <View style={{ marginTop: 32, marginHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>Authors</Text>
                    <TouchableOpacity onPress={() => { { } }}>
                        <Text style={{ color: '#54408C', fontSize: 16, fontWeight: '800' }}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 16 }}>
                    <FlatList
                        data={authorDetails}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={itemsss => itemsss.id}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ marginLeft: 24, marginBottom: 90 }}>
                                    <Image style={{ height: 102, width: 102, borderRadius: 50, resizeMode: 'contain' }} source={item.pic} />
                                    <Text style={{ marginTop: 1, fontSize: 18, color: 'black', fontWeight: '700', marginLeft: 3 }}>{item.name}</Text>
                                    <Text style={{ color: 'gray', fontWeight: '700', marginLeft: 3 }}>{item.Designation}</Text>
                                </View>
                            )
                        }}
                    />
                </View>

            </ScrollView>
            <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
                <BottomTab />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    btnordernow: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // width:150,
        // height:52,
        // marginLeft: 0,
        // marginRight: 24,
        color: 'white',
        borderRadius: 40,
        fontSize: 18,
        fontWeight: '600',
        paddingVertical: 8,
        paddingHorizontal: 24,

    },
    image: {
        width: 99,
        height: 145,
        borderRadius: 3.14,
        resizeMode: "cover"
    },
    image2: {
        width: 130,
        height: 204,
        borderRadius: 10
    }
})