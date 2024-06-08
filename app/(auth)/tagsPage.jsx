import { View, Text, Pressable, StatusBar } from 'react-native'
import React, { useState } from 'react'
import customHeaderNoProfile from '../../components/customHeaderNoProfile'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const TagButton = ({logo, text}) => { // business, entertainment, health, science, sports, technology
    const [clicked, setClicked] = useState(false)
    buttonTrue = "w-[90%] h-[50px] mx-auto mb-[10px] border-black bg-[#FF3A44] border-2 rounded-3xl"
    buttonFalse = "w-[90%] h-[50px] mx-auto mb-[10px] border-black border-2 rounded-3xl"

    textTrue = "font-proxima text-center my-auto text-white"
    textFalse = "font-proxima text-center my-auto text-black"
    return (
        <TouchableOpacity className={(clicked) ? buttonTrue : buttonFalse} onPressOut={() => {setClicked(!clicked)}}>
            <Text className={(clicked) ? textTrue : textFalse}>{logo}     {text}</Text>
        </TouchableOpacity>
    );
}

export default function tagsPage() {
    const router = useRouter();

  return (
    <View>
        {customHeaderNoProfile()}
        <StatusBar barStyle={'dark-content'} />
        <Text className="font-proxima-bold mt-[5%] mx-auto text-3xl text-center mb-[10%]">Select your interests (minimum 2)</Text>
        <View className="mb-3">
            <TagButton logo="💼" text="Business"/>
            <TagButton logo="🎯" text="Entertainment"/>       
            <TagButton logo="👨‍⚕️" text="Health"/>
            <TagButton logo="🧪" text="Science"/>
            <TagButton logo="⚽" text="Sports"/>
            <TagButton logo="🤖" text="Technology"/>
        </View>
        <TouchableOpacity onPressOut={() => {router.replace('(tabs)/home')}} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-[#FF3A44] border-white mb-[20px] rounded-[30px] border">
        <Text className="relative align-middle justify-center m-auto text-xl text-white font-proxima-bold font-bold">Login</Text>
        </TouchableOpacity>
    </View>

  )
}

