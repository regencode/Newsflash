import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, useRouter, useFocusEffect } from "expo-router";
import 'react-native-gesture-handler';

export default function Index() {
  const router = useRouter();
  function toLogin() {
    router.push("(auth)/login");
  }
  function toRegister(){
    router.push("(auth)/register");
  }
  function toProfile(){
    router.push("./profile");
  }
  return (
    <View className="flex-1 items-center justify-center bg-main">

      <View className="absolute align-middle justify-center">
        <Text className="font-proxima text-4xl align-middle justify-center">⚡Newsflash</Text>
        <Text className="font-proxima">Your news, Shortened and Simplified</Text>
      </View>

      <StatusBar style="auto" />

      <View className="relative mt-auto mb-[100px]">
        <Pressable onPressOut={toLogin} className="font-proxima align-middle relative w-[200px] h-[58px] bg-button border-black border-1 mb-[30px]">
          <Text className="relative align-middle justify-center m-auto text-xl text-white">Login</Text>
        </Pressable>
        <Pressable onPressOut={toRegister} className="align-middle relative w-[200px] h-[58px] bg-button border-black border-2">
          <Text className="font-proxima relative align-middle justify-center m-auto text-xl text-white">Register</Text>
        </Pressable>
        <Pressable onPressOut={toProfile} className="align-middle relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2">
          <Text className="font-proxima relative align-middle justify-center m-auto text-xl">Profile for testing</Text>
        </Pressable>
      </View>
      
    </View>
  );


}



