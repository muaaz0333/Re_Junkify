import { StyleSheet, Text, View, Dimensions, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { OnboardFlow } from 'react-native-onboard';
import { Footer } from 'react-native-onboard/lib/OnboardFlow/Footer';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#54408C', white: '#fff' };

const slides = [
    {
        id: '1',
        image: require('../assets/Onboarding/onboarding1.png'),
        title: 'Now Reading Books will be easier',
        subtitle: 'Discover new worlds, join a vibrant reading community. Start your reading adventure effortlessly with us.',

    },
    {
        id: '2',
        image: require('../assets/Onboarding/onboarding2.png'),
        title: 'You Bookish Soulmate Awaits',
        subtitle: 'Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience.',

    },
    {
        id: '3',
        image: require('../assets/Onboarding/onboarding3.png'),
        title: 'Start Your Adventure',
        subtitle: "Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Let's go!",

    },
];


const Onboard = () => {
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null);

    const Footer = () => {
        return (
            <View style={{ height: height * 0.25, justifyContent: 'space-between', paddingHorizontal: 20,}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, }}>
                    {
                        slides.map((_, index) => (
                            <View key={index}
                                style={[styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: "#54408C",
                                    width: 8,
                                    height:8,
                                    borderRadius:4
                                }]} />
                        ))
                    }
                </View>
                <View style={{ marginBottom: 20, alignItems: 'center' }}>
                    {
                        currentSlideIndex == slides.length - 1 ? <View style={{ height:107 }}>
                            <TouchableOpacity onPress={() => navigation.replace("SignIn1")}>
                                <Text style={styles.btnstarted}>Get Started</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.replace("SignIn1")}>
                            <Text style={{
                                    textAlign: 'center', marginLeft: 24, marginRight: 24, color: '#54408C', fontSize: 16, paddingVertical: 16, fontWeight: 'bold'
                                }}>Sign in</Text>
                            </TouchableOpacity>
                        </View> :
                            <View>
                                <TouchableOpacity onPress={goNextSlide}><Text style={styles.btncontinue}>Continue</Text></TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.replace("SignIn1")}><Text style={{
                                    textAlign: 'center', marginLeft: 24, marginRight: 24, color: '#54408C', fontSize: 16, paddingVertical: 16, fontWeight: 'bold'
                                }}>Sign in</Text></TouchableOpacity>
                            </View>
                    }


                </View>
            </View>
        )

    }
    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex)

    }
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }
    };
    const Signin = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);

    }
    return (

        <SafeAreaView style={{ flex: 1, }}>
            <FlatList data={slides}
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                pagingEnabled
                contentContainerStyle={{ height: height * 0.70 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>

    )
}

const Slide = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={{ margin: 1, }}>
            <View style={{ alignSelf: 'flex-start', marginTop: 10 }}>
                <TouchableOpacity style={styles.skiptxt} onPress={() => { navigation.navigate('SignIn1') }}>
                    <Text style={{ fontSize: 15, color: "#54408C", lineHeight: 20, fontFamily: 'Roboto' }}>
                        Skip
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={{backgroundColor:'red', alignItems:'center', justifyContent:'space-between'}}> */}
            <Image
                style={{ height: '55%', width, resizeMode: 'contain' }}
                source={item.image}
            />
            <View style={{ width: 300, alignSelf: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", color: "black", textAlign: "center", marginTop: 3, }}>{item.title}</Text>
                <Text style={{ textAlign: 'center', marginTop: 12, color:"grey" }}>{item.subtitle}</Text>
            </View>

            {/* </View> */}

        </View>
    )
}

export default Onboard

const styles = StyleSheet.create({
    indicator: {
        height: 4,
        width: 4,
        backgroundColor: 'silver',
        marginHorizontal: 3,
        borderRadius: 2,
        alignSelf:'center'
    },
    skiptxt: {
        margin: 20,
        padding: 10,
    },
    btncontinue: {
        backgroundColor: '#54408C',
        textAlign: 'center',
        marginHorizontal:24,
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        paddingVertical: 15,
        paddingHorizontal:100
    },
    btnstarted:{
        backgroundColor: '#54408C',
        textAlign: 'center',
        // marginLeft: 24,
        // marginRight: 24,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        paddingVertical: 15,
        marginHorizontal:24,
        paddingHorizontal:90
    }
})