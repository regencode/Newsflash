import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import userImage from '../components/userImage';
import customHeaderNoProfile from '../components/customHeaderNoProfile';

const profile = () => {
  const router = useRouter();
  return (
    <View>
      {customHeaderNoProfile()}
      {userImage(9)}
      {userInfo("User Name", "username@email.com")}
      <Pressable>
        
      </Pressable>
    </View>
  )
  function userInfo(userName, Email) {
    return (
      <View>
        <Text className="mx-auto text-2xl">
        {userName}
        </Text>
        <Text className="mx-auto text-2xl">
        {Email}
        </Text>
      </View>
    )
  }
}

export default profile

