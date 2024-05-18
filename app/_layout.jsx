import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "PoetsenOne": require("../assets/fonts/PoetsenOne-Regular.ttf"),
    "Helvetica": require("../assets/fonts/Helvetica.ttf")
  })
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown:false }} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})