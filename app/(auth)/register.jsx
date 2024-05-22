import { View, Text, TextInput, Pressable } from 'react-native'
import { useState } from 'react';
import React from "react";
import { createUser } from "../../lib/appwrite"

const register = () => {

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
      <Text className="mt-[10%] ml-[10%] text-3xl">Register</Text>
      <View className="mt-[10%] mb-[30%]">
        <View>
          <Text className="relative align-middle ml-[10%] text-2xl">Username</Text>
          <View className="relative align-middle w-[300px] h-[50px] mx-auto border-black border rounded-lg">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
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
        <View>
          <Text className="relative align-middle ml-[10%] text-2xl">Confirm Password</Text>
          <View className="relative align-middle w-[300px] h-[50px] mx-auto border-black border rounded-lg">
            <TextInput className="align-middle w-[80%] mx-auto border-black my-[10px]" />
          </View>
        </View>
      </View>
      <Pressable onPressOut={submit} className="align-middle justify-center relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2 mx-auto my-auto">
        <Text className="relative align-middle justify-center m-auto text-xl">Register</Text>
      </Pressable>
    </View>
  );
};

export default register;