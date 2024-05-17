import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'


const RootLayout = () => {
  return (
    <>
      <Text></Text>
      <Slot />
      <Text></Text>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})