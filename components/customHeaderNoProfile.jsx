import { View, Text, Image, StatusBar } from 'react-native';
import React from 'react';
import { icons } from '../constants/icons';


export default function customHeaderNoProfile(showProfileButton) {

  return (
    <View className="h-[15vh] w-full">
        <Image 
        source={icons.logo}
        className="ml-[4%] h-[60%] mb-1 mt-auto aspect-square"
        />
        <View className="absolute right-[4%] bottom-0 h-[80%] w-fit aspect-square">
            {showProfileButton(false)}       
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


