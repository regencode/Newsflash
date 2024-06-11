import { Pressable, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import userImage from '../components/userImage';
import customHeaderNoProfile from '../components/customHeaderNoProfile';

const profile = () => {
  const router = useRouter();
  return (
    <View className="w-[100%] h-[100%]">
      {customHeaderNoProfile()}
      <StatusBar barStyle='dark-content' />
      <Text className="mx-auto text-3xl font-proxima-bold">Account Information</Text>
      {userImage(9)}
      {userInfo("User Name", "username@email.com")}
      <View className="mt-[20%]">
        <TouchableOpacity className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-[#FF3A44] border-white mb-[10px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-lg text-white font-proxima-bold font-bold">Change interest topics</Text>
        </TouchableOpacity>
        <TouchableOpacity className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] border-[#FF3A44] mb-[10px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-lg text-[#FF3A44] font-proxima-bold font-bold">Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  function userInfo(userName, Email) {
    return (
      <View>
        <Text className="mx-auto text-2xl font-proxima">
        {userName}
        </Text>
        <Text className="mx-auto text-2xl font-proxima">
        {Email}
        </Text>
      </View>
    )
  }
}

export default profile

