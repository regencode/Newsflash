import { TextInput, Text, View, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function login() {
    const router = useRouter()
    function toHome(){
        return router.push("../(tabs)/home");
    }
  return (
    <View>
      <Text className="mt-[10%] ml-[10%] text-3xl">Login to your account</Text>
      <View className="mt-[10%] mb-[30%]">
        <View>
          <Text className="relative align-middle ml-[10%] text-2xl">Email</Text>
          <View className="relative align-middle w-[300px] h-[50px] mx-auto border-black border rounded-lg">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
        <View>
          <Text className="relative align-middle ml-[10%] text-2xl">Password</Text>
          <View className="relative align-middle w-[300px] h-[50px] mx-auto border-black border rounded-lg">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
      </View>
      <Pressable onPressOut={toHome} className="align-middle justify-center relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2 mx-auto my-auto">
        <Text className="relative align-middle justify-center m-auto text-xl">Login</Text>
      </Pressable>
    </View>
  );
};

