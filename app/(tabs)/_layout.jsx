import { StyleSheet, Text, View, Image, Stack } from 'react-native'
import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { icons }  from "../../constants/icons.ts";
import customHeader from '../../components/customHeader.jsx';

import Explore from "./explore"
import Home from "./home"
import Profile from "./profile"

const Tab = createBottomTabNavigator();

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
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#FF3A44',
      tabBarShowLabel: true,
      tabBarStyle: {
        position: 'absolute',
        bottom: 25,
        left: 50,
        right: 50,
        elevation: 0,
        borderRadius: 20,
        height: 50
      },

    }}
    >
      <Tab.Screen
      name="Home"
      component={Home} 
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
      }}/>
      <Tab.Screen
      name="Explore"
      component={Explore}
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
      }}/>
      <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ color, focused }) => (
          <TabIcon 
            icon={icons.profile}
            color={color}
            name="Saved"
            focused={focused}
          />
        )
      }}/>
    </Tab.Navigator>
  )
}

const headerStyle = StyleSheet.create({
  backgroundColor: "red"
})

export default TabLayout
