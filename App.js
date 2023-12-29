import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from './components/Onboarding1';
import Onboarding2 from './components/Onboarding2';
import Onboarding3 from './components/Onboarding3';
import SignIn1 from './components/SignIn1';
import Signup from './components/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Onboard from './components/Onboard';
import VerificationEmail from './components/VerificationEmail';
import EnterPhone from './components/EnterPhone';
import VerificationPhone from './components/VerificationPhone';
import SuccessVerification from './components/SuccessVerification';
// import SplashScreen from 'react-native-splash-screen'


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(()=>{
      SplashScreen.hide();
    }, 2000)
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>


      <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{ headerShown: false }}
        >

        </Stack.Screen>

      
        {/* <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{ headerShown: false }}
        >

        </Stack.Screen> */}


        {/* <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{ headerShown: false }}
        >

        </Stack.Screen> */}


        {/* <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{ headerShown: false }}
        >

        </Stack.Screen> */}

        <Stack.Screen
          name="SignIn1"
          component={SignIn1}
          options={{ headerShown: false }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="VerificationEmail"
          component={VerificationEmail}
          options={{ headerShown: false }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="EnterPhone"
          component={EnterPhone}
          options={{ headerShown: false }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="VerificationPhone"
          component={VerificationPhone}
          options={{ headerShown: false }}
        >

        </Stack.Screen>

        <Stack.Screen
          name="SuccessVerification"
          component={SuccessVerification}
          options={{ headerShown: false }}
        >

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})