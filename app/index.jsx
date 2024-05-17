import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">

      <View className="absolute align-middle justify-center">
        <Text className="text-4xl align-middle justify-center">⚡Newsflash</Text>
        <Text className>Your news, Shortened and Simplified</Text>
      </View>

      <StatusBar style="auto" />

      <View className="relative mt-auto mb-[100px]">
        <Pressable className="align-middle relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2 mb-[30px]">
          <Text className="relative align-middle justify-center m-auto text-xl">Login</Text>
        </Pressable>
        <Pressable className="align-middle relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2">
          <Text className="relative align-middle justify-center m-auto text-xl">Register</Text>
        </Pressable>
      </View>
      
    </View>
  );
}

