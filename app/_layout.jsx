import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "ProximaNova": require("../assets/fonts/Mark Simonson Proxima Nova Regular.otf"),
    "ProximaNovaSemi": require("../assets/fonts/Mark Simonson Proxima Nova Semibold.otf")
  })
  return (
    <Slot>
      <Stack.Screen name="index" options={{ headerShown:false }} />
    </Slot>
  )
}

export default RootLayout

const styles = StyleSheet.create({})