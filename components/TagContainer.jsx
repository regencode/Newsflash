import { View, Text } from 'react-native'
import React from 'react'

const TagContainer = ({ text }) => {
  return (
    <View className="aspect-[66/25] w-[22%] h-auto auto rounded-lg bg-[#FF3A44]">
        <Text className="font-proxima text-[10px] align-middle justify-center mx-auto my-auto text-white">{text}</Text>
    </View>
  )
}


export default TagContainer;