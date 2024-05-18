import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, useRouter, useFocusEffect } from "expo-router";


export default function Index() {
  const router = useRouter();
  function toLogin() {
    router.push("(auth)/login")
  }
  function toRegister(){
    router.push("(auth)/register")
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <View className="absolute align-middle justify-center">
        <Text className="font-helvetica text-4xl align-middle justify-center">⚡Newsflash</Text>
        <Text className="font-helvetica">Your news, Shortened and Simplified</Text>
      </View>

      <StatusBar style="auto" />

      <View className="relative mt-auto mb-[100px]">
        <Pressable onPressOut={toLogin} className="align-middle relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-1 mb-[30px]">
          <Text className="relative align-middle justify-center m-auto text-xl">Login</Text>
        </Pressable>
        <Pressable onPressOut={toRegister} className="align-middle relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2">
          <Text className="relative align-middle justify-center m-auto text-xl">Register</Text>
        </Pressable>
      </View>
      
    </View>
  );


}



