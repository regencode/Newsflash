import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "PoetsenOne": require("../assets/fonts/PoetsenOne-Regular.ttf"),
    "ProximaNova": require("../assets/fonts/Mark Simonson Proxima Nova Regular.otf"),
    "ProximaNovaSemi": require("../assets/fonts/Mark Simonson Proxima Nova Semibold.otf")
  })
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown:false }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})