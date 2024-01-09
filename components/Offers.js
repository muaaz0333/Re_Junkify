import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Offers = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1}}>
            {/* Appbar */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25, marginHorizontal: 24  }}>
                <TouchableOpacity onPress={() => {navigation.navigate("Profile") }}>
                    <Image source={require("../assets/Icons/Arrow_Left.png")} style={{ tintColor: 'black' }} />
                </TouchableOpacity>
                <View style={{ marginHorizontal: 78 }}>
                    <Text style={{ fontSize: 21, color: 'black', fontWeight: '700' }}>Order History</Text>
                </View>
            </View>


            <View style={{ marginTop: 24 }}>
                <Text style={{ color: 'black', fontSize: 19, fontWeight: '700', marginHorizontal: 24  }}>
                    You Have 5 Copons to use
                </Text>
            </View>


            <View style={{ flexDirection: 'row', marginTop: 33, justifyContent:'space-between', marginHorizontal: 15  }}>
                <View style={{ backgroundColor: '#54408C', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            50% OFF
                        </Text>
                    </View>
                    <View style={{ marginTop: 14 }}>
                        <TouchableOpacity>
                            <Text style={{ backgroundColor: 'white', width: 80, textAlign: 'center', borderRadius: 40, paddingVertical: 8, paddingHorizontal: 14, fontSize: 17, fontWeight: '900', color: '#54408C' }}>
                                Copy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#F5BE00', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            23% OFF
                        </Text>
                    </View>
                    <View style={{ marginTop: 14 }}>
                        <TouchableOpacity>
                            <Text style={{ backgroundColor: 'white', width: 80, textAlign: 'center', borderRadius: 40, paddingVertical: 8, paddingHorizontal: 14, fontSize: 17, fontWeight: '900', color: '#F5BE00' }}>
                                Copy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


            <View style={{ flexDirection: 'row',  marginTop: 24, justifyContent:'space-between', marginHorizontal: 15  }}>
                <View style={{ backgroundColor: '#3784FB', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            50% OFF
                        </Text>
                    </View>
                    <View style={{ marginTop: 14 }}>
                        <TouchableOpacity>
                            <Text style={{ backgroundColor: 'white', width: 80, textAlign: 'center', borderRadius: 40, paddingVertical: 8, paddingHorizontal: 14, fontSize: 17, fontWeight: '900', color: '#3784FB' }}>
                                Copy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#FF8C39', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            23% OFF
                        </Text>
                    </View>
                    <View style={{ marginTop: 14 }}>
                        <TouchableOpacity>
                            <Text style={{ backgroundColor: 'white', width: 80, textAlign: 'center', borderRadius: 40, paddingVertical: 8, paddingHorizontal: 14, fontSize: 17, fontWeight: '900', color: '#FF8C39' }}>
                                Copy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 24, justifyContent:'space-between', marginHorizontal: 15  }}>
                <View style={{ backgroundColor: '#121212', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            50% OFF
                        </Text>
                    </View>
                    <View style={{ marginTop: 14 }}>
                        <TouchableOpacity>
                            <Text style={{ backgroundColor: 'white', width: 80, textAlign: 'center', borderRadius: 40, paddingVertical: 8, paddingHorizontal: 14, fontSize: 17, fontWeight: '900', color: '#121212' }}>
                                Copy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: '#34A853', width: 160, height: 170, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            23% OFF
                        </Text>
                    </View>
                    <View style={{ marginTop: 14 }}>
                        <TouchableOpacity>
                            <Text style={{ backgroundColor: 'white', width: 80, textAlign: 'center', borderRadius: 40, paddingVertical: 8, paddingHorizontal: 14, fontSize: 17, fontWeight: '900', color: '#34A853' }}>
                                Copy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



        </View>
    )
}

export default Offers

const styles = StyleSheet.create({})