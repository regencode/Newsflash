import { View, Text, Image, Pressable, Touchable, PanResponder } from 'react-native'
import { React, useRef } from 'react'
import { useState } from 'react'
import showNewsPage from './showNewsPage'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'


const TopNewsUnit = ({ title, author, date, tags }) => {
  const router = useRouter();

  function goToNewsPage(){
    return router.push("../newsPage");
  }



  return (
    <TouchableOpacity className="w-[91vw] h-[100%] border-b border-sub justify-center overflow-hidden items-center mb-3 rounded-xl bg-[rgba(0,0,0,.6)] mx-[4.5vw]" onLongPress={goToNewsPage}>
      <Image className="align-center absolute object-cover w-[100%] h-[100%]" source={require("../assets/images/TEST_IMAGE.jpg")} />
      <View className="absolute align-center w-[100%] h-[100%] bg-black opacity-30"></View>
      <View className="align-center w-[90%] h-[80%] text-left mx-auto my-auto">
        <Text className="font-proxima-bold text-[15px] text-white">{title}</Text>
        <Text className="font-proxima text-xs text-white">{author} / {date}</Text>
        <View className="w-[20%] h-[12%] rounded border border-white">
          <Text className="font-proxima text-[10px] align-middle justify-center mx-auto my-auto text-white">{tags}</Text>
        </View>
      </View>
      {/* <View className="absolute bg-white z-50 w-[100%] h-[60%] bottom-0">

      </View> */}
    </TouchableOpacity>
  )
}

export default TopNewsUnit;