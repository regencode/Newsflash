import { TextInput, Text, View, Pressable, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import customHeaderNoProfile from "../../components/customHeaderNoProfile";

export default function login() {
    const router = useRouter()
    function toHome(){
        return router.push("../(tabs)/Home");
    }
    function toIndex(){
      return router.back()
    }
  return (
    <View>
      {customHeaderNoProfile(true)}
      <StatusBar barStyle={"dark-content"} />
      <Text className="font-proxima-bold mt-[5%] mx-auto text-3xl">Login to your account</Text>
      <View className="mt-[10%] mb-[30%] w-full">
        <View className="mb-[10px]">
          <Text className="font-proxima relative align-middle ml-[15%] text-2xl">Email</Text>
          <View className="relative align-middle w-[75%] h-[50px] mx-auto border-black border rounded-3xl">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
        <View>
          <Text className="font-proxima relative align-middle ml-[15%] text-2xl">Password</Text>
          <View className="relative align-middle w-[75%] h-[50px] mx-auto border-black border rounded-3xl">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPressOut={toHome} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-[#FF3A44] border-white mb-[20px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xl text-white font-proxima-bold font-bold">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPressOut={toIndex} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-transparent border-[#FF3A44] mb-[10px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xl text-[#FF3A44] font-proxima-bold font-bold">Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

