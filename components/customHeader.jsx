import { View, Text, Image } from 'react-native';
import React from 'react';
import { icons } from '../constants/icons';


export default function customHeader(showProfileButton) {

  return (
    <View className="h-[15vh] w-full bg-white">
        <Image 
        source={icons.logo}
        className="ml-[4%] h-[60%] mb-1 mt-auto aspect-square"
        />
        <View className="absolute right-[4%] bottom-0 h-[60%] w-fit aspect-square">
            {showProfileButton(true)}       
        </View>
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


