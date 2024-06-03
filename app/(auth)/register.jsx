import { View, Text, TextInput, Pressable, StatusBar } from 'react-native'
import { useState } from 'react';
import React from "react";
import { createUser } from "../../lib/appwrite";
import { useRouter } from 'expo-router';
import customHeaderNoProfile from '../../components/customHeaderNoProfile';

const register = () => {
    const router = useRouter()
    function toHome(){
        return router.replace("../(tabs)/Home");
    }
    function toIndex(){
      return router.back()
    }
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {
    createUser();
  }


  return (
    <View>
      {customHeaderNoProfile()}
      <StatusBar barStyle={"dark-content"} />
      <Text className="font-proxima-bold mt-[5%] mx-auto text-3xl">Register</Text>
      <View className="mt-[10%] mb-[10%]">
        <View className="mb-[10px]">
          <Text className="font-proxima relative align-middle ml-[15%] text-2xl">Email</Text>
          <View className="relative align-middle w-[75%] h-[50px] mx-auto border-black border rounded-3xl">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px] text-2xl" />
          </View>
        </View>
        <View className="mb-[10px]">
          <Text className="font-proxima relative align-middle ml-[15%] text-2xl">Password</Text>
          <View className="relative align-middle w-[75%] h-[50px] mx-auto border-black border rounded-3xl">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
        <View className="mb-[10px]">
          <Text className="font-proxima relative align-middle ml-[15%] text-2xl">Confirm Password</Text>
          <View className="relative align-middle w-[75%] h-[50px] mx-auto border-black border rounded-3xl">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
      </View>
      <View>
        <Pressable onPressOut={() => {router.push('./tagsPage')}} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-[#FF3A44] border-white mb-[20px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xl text-white font-proxima-bold font-bold">Register</Text>
        </Pressable>
        <Pressable onPressOut={toIndex} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-transparent border-[#FF3A44] mb-[10px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xl text-[#FF3A44] font-proxima-bold font-bold">Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default register;