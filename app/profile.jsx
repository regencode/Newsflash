import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const profile = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <Link href="/index" style={{color: "blue"}}>Go to Index</Link>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
    }
})