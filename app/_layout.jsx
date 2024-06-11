import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "ProximaNova": require("../assets/fonts/MarkSimonsonProximaNovaRegular.otf"),
    "ProximaNovaSemi": require("../assets/fonts/MarkSimonsonProximaNovaSemibold.otf")
  })
  const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded || error) await SplashScreen.hideAsync()
  }, [fontsLoaded, error])
if (!fontsLoaded && !error) return null

  return (
    <Slot>
      <Stack.Screen name="index" options={{ headerShown:false }} />
    </Slot>
  )
}

export default RootLayout

const styles = StyleSheet.create({})