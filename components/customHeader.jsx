import { View, Text, Image, Pressable, StatusBar } from 'react-native';
import React from 'react';
import { icons } from '../constants/icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function customHeader(showProfileButton) {

    function goToHome(){
        return router.replace("(tabs)/home");
    }

    function goToProfile(){
        return router.replace("../profile")
    }

    const router = useRouter()
  return (
    <View className="h-[15vh] w-full bg-white">
        <Pressable onPressOut={() => {goToHome}} className="ml-[4%] h-full mb-1 mt-auto aspect-square">
            <Image 
            source={icons.logo}
            className="ml-[4%] h-[60%] mb-1 mt-auto aspect-square"
            />
        </Pressable>
        <StatusBar style={{ backgroundColor: 'black' }} />
        <TouchableOpacity className="absolute right-[4%] bottom-0 h-[60%] w-fit aspect-square" onPressOut={goToProfile}>
            {showProfileButton(true)}       
        </TouchableOpacity>
    </View>
  )
    function showProfileButton(show){
        if(show === true){
            return (
                <Image source={icons.account_button} className="w-auto h-auto align-middle mx-auto my-auto"/>
            )
        }
    }
}


