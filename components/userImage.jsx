import { View, Text, Image } from 'react-native'
import React from 'react'

export default function userImage(image) {
  return (
    <View className="aspect-square w-[60%] h-auto mx-auto overflow-hidden items-center border-black border rounded-full my-4">
        <Image
            className="object-cover w-[100%] h-[100%]"
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
        />
    </View>
  )
}