import { StyleSheet, Text, View, Image, Stack } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons }  from "../../constants/icons.ts";
import customHeader from '../../components/customHeader.jsx';

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View>
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
      <Tabs screenOptions={{
        tabBarShowLabel: false,
      }}>
         <Tabs.Screen 
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.compass}
                color={color}
                name="Explore"
                focused={focused}
              />
            ),
            style: {headerStyle}
          }}
        />       
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
          name="saved"
          options={{
            title: "Saved",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.bookmark}
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

export default TabLayout

const headerStyle = StyleSheet.create({
  backgroundColor: "red"
})
