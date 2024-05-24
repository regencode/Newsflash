import { Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, useRouter, useFocusEffect, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { icons } from "../constants/icons";
import 'react-native-gesture-handler';

export default function Index() {
  const router = useRouter();
  function toLogin() {
    router.push("(auth)/login");
  }
  function toRegister(){
    router.push("(auth)/register");
  }
  function toProfile(){
    router.push("./profile");
  }
  
  return (
    <View className="flex-1 items-center justify-center bg-[#D6484C]">
      <LinearGradient 
        colors={['#FF3A44', '#B05454']}
      />

      <View className="relative justify-center mt-[37%] mb-auto">
        <Text className="font-proxima-bold text-[52px] align-middle justify-center text-white italic font-bold">Newsflash</Text>
      </View>
      <Image 
        source={icons.logo}
        className="w-[250px] h-[250px]"
      />

      <StatusBar style="auto" />

      <View className="relative mt-auto mb-[60px] text-center">
        <Pressable onPressOut={toLogin} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-[#FF3A44] border-white mb-[10px] rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xl text-white font-proxima-bold font-bold">Login</Text>
        </Pressable>
        <Text className="font-proxima relative align-middle justify-center m-auto text-xl text-white">Don't have an account?</Text>
        <Text className="font-proxima relative align-middle justify-center m-auto text-xl text-white mx-auto"> <Link href="(auth)/register" className="text-yellow-500 underline font-bold">Register</Link> or <Link href="(tabs)/home" className="text-yellow-500 underline font-bold">Join as Guest</Link></Text>
        <Pressable onPressOut={toProfile} className="align-middle relative w-[200px] h-[58px] bg-orange-300 rounded-[10px] border-black border-2">
          <Text className="font-proxima relative align-middle justify-center m-auto text-xl">Profile for testing</Text>
        </Pressable>
      </View>
      
    </View>
  );


}



