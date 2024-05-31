import { StyleSheet, Text, View, Image, Stack } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons }  from "../../constants/icons.ts";
import customHeader from '../../components/customHeader.jsx';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs 
        className='backgroundColor-red'
        screenOptions={{
          tabBarInactiveBackgroundColor: 'transparent',
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#FF3A44',
          headerTintColor: 'transparent',
          tabBarStyle:{
            height: 70,
            bottom: 100,
            maxWidth: 300,
            left: 50,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40, 
          },
          headerBackgroundContainerStyle:{
            backgroundColor: 'black'
          }
        }}>
        <Tabs.Screen 
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
         <Tabs.Screen 
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.explore}
                color={color}
                name="Explore"
                focused={focused}
              />
            ),
            style: {headerStyle}
          }}
        />       
        <Tabs.Screen 
          name="saved"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.profile}
                color={color}
                name="Saved"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}


const headerStyle = StyleSheet.create({
  backgroundColor: "red"
})

export default TabLayout