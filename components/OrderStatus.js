import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';



const OrderStatus = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginHorizontal: 24 }}>

            <View style={{ backgroundColor: '#FAF9FD', marginTop: 30, paddingVertical: 24, paddingVertical: 32, borderRadius: 10 }}>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 18, color: 'black' }}>
                        Thankyou <Image source={require('../assets/Icons/hand.png')} />
                    </Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: '#54408C', fontSize: 21, fontWeight: '700' }}>
                        Lorem ipsum dolor sit
                    </Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center', color: 'black', fontSize: 16 }}>
                        Order #2930541
                    </Text>
                </View>

            </View>


            <View style={{ flexDirection: 'row', marginTop: 16, alignSelf: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: '400' }} >
                    Do you want to cancel your order?
                </Text>
                <Text style={{ marginLeft: 5, fontSize: 15, color: '#54408C', fontWeight: '700' }}>
                    Cancel
                </Text>
            </View>

            <View style={{ marginTop: 16 }}>
                <Text style={{ color: 'black', fontSize: 19, fontWeight: '700' }}>
                    Order Details
                </Text>
            </View>



            <View style={{ borderWidth: 1, padding: 16, borderRadius: 12, borderColor: 'silver', marginTop: 16 }}>


                <View style={{ flexDirection: 'row', marginTop: 16, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'black', }}>
                            1x
                        </Text>
                        <Text style={{ marginLeft: 7, color: 'black', fontSize: 15 }}>
                            Carrie Fisher
                        </Text>
                    </View>

                    <Text style={{ fontSize: 15, color: 'black', justifyContent: 'flex-end', textAlign: 'right', alignContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                        $19.99
                    </Text>
                </View>



                <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'black', }}>
                            1x
                        </Text>
                        <Text style={{ marginLeft: 7, color: 'black', fontSize: 15 }}>
                            The Da vinci Code
                        </Text>
                    </View>

                    <Text style={{ fontSize: 15, color: 'black', justifyContent: 'flex-end', textAlign: 'right', alignContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                        $39.99
                    </Text>
                </View>



                <View style={{ flexDirection: 'row', marginTop: 8, justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'black', }}>
                            1x
                        </Text>
                        <Text style={{ marginLeft: 7, color: 'black', fontSize: 15 }}>
                            Arcu ipsum feugiat leo odio
                        </Text>
                    </View>

                    <Text style={{ fontSize: 15, color: 'black', justifyContent: 'flex-end', textAlign: 'right', alignContent: 'flex-end', alignSelf: 'flex-end', alignItems: 'flex-end' }}>
                        $27.12
                    </Text>
                </View>




                <View style={{ height: 1, width: 335, backgroundColor: 'silver', marginVertical: 16 }}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                        Subtotal
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                        $87.10
                    </Text>
                </View>



                <View style={{ height: 1, width: 335, backgroundColor: 'silver', marginVertical: 16 }}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                        Shipping
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black', fontWeight: '500' }}>
                        $2
                    </Text>
                </View>
                <View style={{ height: 1, width: 335, backgroundColor: 'silver', marginVertical: 16 }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '800' }}>
                        Total Payment
                    </Text>
                    <Text style={{ fontSize: 16, color: '#54408C', fontWeight: '800' }}>
                        $89.10
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                    <Text style={{ fontSize: 15, color: 'black', }}>
                        Delivery in
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black', }}>
                        10 - 15 mins
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 }}>
                    <Text style={{ fontSize: 15, color: 'black', }}>
                        Time
                    </Text>
                    <Text style={{ fontSize: 15, color: 'black', }}>
                        15.24 - 15.39
                    </Text>
                </View>
            </View>


            {/* Button */}
            <View style={{ marginTop: 78 }}>
                <TouchableOpacity onPress={() => { navigation.navigate("OrderStatusRating")}}>
                    <Text style={styles.order}>
                        Order Status
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default OrderStatus

const styles = StyleSheet.create({
    order: {
        textAlign: 'center',
        fontSize: 18,
        color: '#54408C',
        backgroundColor: '#FAF9FD',
        paddingVertical: 12,
        borderRadius: 30,
        fontWeight: '600'
    }
})