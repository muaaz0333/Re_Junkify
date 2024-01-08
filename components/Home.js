import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useState } from 'react'
import Category from './Category';
import Cart from './Cart';
import Profile from './Profile';
import { Card } from 'react-native-paper';
import { black, white } from 'react-native-paper/lib/typescript/styles/colors';
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
        title: 'A Million to one',
        price: '14.99',
        vendor: require('../assets/Images/VFrame1.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(4.0)',
        ratingStars: 4,
    },
    {
        id: '2',
        pic: require('../assets/Images/book3.jpg'),
        title: 'The Dragon Gate',
        price: '19.99',
        vendor: require('../assets/Images/VFrame2.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(5.0)',
        ratingStars: 5,
    },
    {
        id: '3',
        pic: require('../assets/Images/image3.png'),
        title: 'The Kite Runner',
        price: '34.99',
        vendor: require('../assets/Images/VFrame3.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(2.0)',
        ratingStars: 2,
    },
    {
        id: '4',
        pic: require('../assets/Images/book4.jpg'),
        title: 'The Caged Dragon',
        price: '24.99',
        vendor: require('../assets/Images/VFrame4.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(4.0)',
        ratingStars: 4,
    },
    {
        id: '5',
        pic: require('../assets/Images/book1.png'),
        title: 'A Million to one',
        price: '18',
        vendor: require('../assets/Images/VFrame5.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(3.0)',
        ratingStars: 3,
    },
    {
        id: '6',
        pic: require('../assets/Images/book.jpg'),
        title: 'Zombie Spacesuit',
        price: '14.99',
        vendor: require('../assets/Images/VFrame6.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(4.0)',
        ratingStars: 4,
    },
    {
        id: '7',
        pic: require('../assets/Images/imageslider.png'),
        title: 'Trials of Apollo',
        price: '112.99',
        vendor: require('../assets/Images/VFrame7.png'),
        about: 'One of the reasons we love React so much is how easy it is to reuse the same component wherever it makes sense.',
        rating: '(5.0)',
        ratingStars: 5,
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

// const authorDetails = [
//     {
//         id: '1',
//         pic: require('../assets/Images/Author7.png'),
//         name: 'Anna',
//         Designation: 'Writer'
//     },
//     {
//         id: '2',
//         pic: require('../assets/Images/Author1.png'),
//         name: 'Tess Gunty',
//         Designation: 'Novelist'
//     },
//     {
//         id: '3',
//         pic: require('../assets/Images/Author2.png'),
//         name: 'Richard',
//         Designation: 'Writer'
//     },
//     {
//         id: '4',
//         pic: require('../assets/Images/Author3.png'),
//         name: 'John Dree',
//         Designation: 'Composer'
//     },
//     {
//         id: '5',
//         pic: require('../assets/Images/Author4.png'),
//         name: 'Nina',
//         Designation: 'Writer'
//     },
//     {
//         id: '6',
//         pic: require('../assets/Images/Author5.png'),
//         name: 'Lucy',
//         Designation: 'Writer'
//     },
//     {
//         id: '7',
//         pic: require('../assets/Images/Author6.png'),
//         name: 'AB John',
//         Designation: 'Writer'
//     },
// ]

const authorDetails = [
    {
        image: require('../assets/Images/Author7.png'),
        designation: 'Novelist',
        name: 'Anna',
        ratingStars: 5,
        rating: '(5.0)',
        about: 'Anna is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
    {
        image: require('../assets/Images/Author5.png'),
        designation: 'Writer',
        name: 'Nina',
        ratingStars: 4,
        rating: '(4.0)',
        about: 'Nina is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
    {
        image: require('../assets/Images/Author1.png'),
        designation: 'Novelist',
        name: 'Jack',
        ratingStars: 3,
        rating: '(3.0)',
        about: 'Jack is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
    {
        image: require('../assets/Images/Author6.png'),
        designation: 'Novelist',
        name: 'John A',
        ratingStars: 5,
        rating: '(5.0)',
        about: 'John is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
    {
        image: require('../assets/Images/Author2.png'),
        designation: 'Novelist',
        name: 'Smith',
        ratingStars: 2,
        rating: '(2.0)',
        about: 'Smith is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
    {
        image: require('../assets/Images/Author3.png'),
        designation: 'Novelist',
        name: 'John Lee',
        ratingStars: 1,
        rating: '(1.0)',
        about: 'Lee is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
    {
        image: require('../assets/Images/Author4.png'),
        designation: 'Writer',
        name: 'Lucy',
        ratingStars: 4,
        rating: '(4.0)',
        about: 'Steve is born and raised in South bend. She graduated from the University of Notre Dame with bachelor of Arts.',

        Product1:

        {
            productImg: require('../assets/Images/book.jpg'),
            productTitle: 'The da vinci Code',
            productPrice: '19.99'
        },

        Product2:

        {
            productImg: require('../assets/Images/book1.png'),
            productTitle: 'Carrie Fisher',
            productPrice: '27.12'
        },

        Product3:

        {
            productImg: require('../assets/Images/book3.jpg'),
            productTitle: 'The Good Sister',
            productPrice: '27.12'
        },

        Product4:

        {
            productImg: require('../assets/Images/book4.jpg'),
            productTitle: 'The Waiting',
            productPrice: '27.12'
        },
    },
]



const Home = () => {

    const [img, setImg] = useState();
    const [title, setTitle] = useState();
    const [vendor, setVendor] = useState();
    const [about, setAbout] = useState();
    const [rating, setRating] = useState();
    const [price, setPrice] = useState();
    const [star, setStar] = useState();

    const openModal = (pic, title, vendor, about, rating, price, ratingStars) => {
        setImg(pic)
        setTitle(title)
        setVendor(vendor)
        setAbout(about)
        setRating(rating)
        setPrice(price)
        setStar(ratingStars)
        setModalVisible(!modalVisible)
    }

    const [data, setData] = useState([1, 2, 3]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1, }}>


            {/* home app bar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, marginHorizontal: 24 }}>
                <TouchableOpacity onPress={()=>navigation.navigate("HomeSearch")}>
                    <Image source={require("../assets/Icons/Search.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>


                <Text style={{ fontSize: 20, color: 'black', fontWeight: '800' }}>Home</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("DeliveryNotification")}>
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
                    <TouchableOpacity >
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
                                <TouchableOpacity style={{ marginLeft: 24, marginTop: 16 }}
                                    onPress={() => openModal(item.pic, item.title, item.vendor, item.about, item.rating, item.price, item.ratingStars)}
                                >
                                    <Image style={styles.image2} source={item.pic} />
                                    <Text style={{ marginTop: 1, fontSize: 15, color: 'black', fontWeight: '700' }}>{item.title}</Text>
                                    <Text style={{ color: '#54408C', fontWeight: '700' }}>${item.price}</Text>
                                </TouchableOpacity>
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
                    <TouchableOpacity onPress={() => { { navigation.navigate("Authors") } }}>
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
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("AuthorInnerPage",{item:item})}
                                    style={{ marginLeft: 24, marginBottom: 90 }}>
                                    <Image style={{ height: 102, width: 102, borderRadius: 50, resizeMode: 'contain' }} source={item.image} />
                                    <Text style={{ marginTop: 1, fontSize: 18, color: 'black', fontWeight: '700', marginLeft: 3 }}>{item.name}</Text>
                                    <Text style={{ color: 'gray', fontWeight: '700', marginLeft: 3 }}>{item.designation}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>








            </ScrollView>
            <View style={{ position: 'absolute', width: '100%', backgroundColor: 'white', bottom: 0, paddingVertical: 6 }}>
                <BottomTab />
            </View>



            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}


            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>


                    <View style={{ flex: 1, backgroundColor: 'white', marginTop: 60, elevation: 10, borderTopLeftRadius: 60, borderTopRightRadius: 60 }}>

                        <View style={{ marginTop: 20 }}>

                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <View style={{ height: 5, width: 56, backgroundColor: 'gray', alignSelf: 'center' }}></View>
                            </TouchableOpacity>


                            <View style={{ marginHorizontal: 85, marginTop: 19 }}>
                                <Image style={{ borderRadius: 40, resizeMode: 'contain', width: 237, height: 313 }} source={img} />
                            </View>

                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 24, marginTop: 16 }}>

                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800' }}>
                                        {title}
                                    </Text>
                                    <Image source={require('../assets/Icons/favourite.png')} />
                                </View>
                            </View>

                            <View style={{ marginTop: 12, marginLeft: 24 }}>
                                <Image style={{ width: 80, height: 24, resizeMode: 'cover' }} source={vendor} />
                            </View>

                            <View style={{ marginTop: 14 }}>
                                <Text style={{ marginLeft: 24, marginRight: 40, fontSize: 16, fontWeight: '400' }}>
                                    {about}
                                </Text>
                            </View>

                            <View style={{ marginTop: 24 }}>
                                <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold', marginLeft: 24 }}>
                                    Review
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 24, marginTop: 8, alignItems: 'center' }}>
                                {
                                    star == 1 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    star == 2 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    star == 3 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    star == 4 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/Star.png')} />
                                        </View>
                                        :
                                        null
                                }
                                {
                                    star == 5 ?
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                            <Image source={require('../assets/Icons/StarYellow.png')} />
                                        </View>
                                        :
                                        null
                                }

                                {/* <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/StarYellow.png')} />
                                <Image style={{ marginRight: 4, height: 20, width: 20 }} source={require('../assets/Icons/Star.png')} /> */}
                                <Text style={{ color: 'black', fontWeight: '900' }}>{rating}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 24, marginTop: 20, alignItems: 'center' }}>
                                <View style={{ backgroundColor: '#E8E8E8', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../assets/Icons/Minus.png')} />
                                </View>

                                <View>
                                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '700', marginHorizontal: 13 }}> 1 </Text>
                                </View>

                                <View style={{ backgroundColor: '#54408C', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../assets/Icons/Plus.png')} />
                                </View>

                                <View>
                                    <Text style={{ color: '#54408C', fontSize: 15, fontWeight: '700', marginLeft: 17 }}>
                                        {price}
                                    </Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ marginLeft: 20, marginTop: 22 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.btncontinue}>
                                            Continue Shopping
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 12, marginTop: 22, marginRight: 24 }}>
                                    <TouchableOpacity>
                                        <Text style={styles.btnviewcart}>View Cart</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>


                    </View>
                </View>
            </Modal>
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
    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 27,
        fontSize: 18,
        paddingVertical: 11,
        fontWeight: '700',
        paddingHorizontal: 28
    },
    btnviewcart: {
        backgroundColor: '#F0F3F4',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: '#54408C',
        borderRadius: 27,
        fontSize: 18,
        paddingVertical: 11,
        fontWeight: '700',
        paddingHorizontal: 22
    },
})