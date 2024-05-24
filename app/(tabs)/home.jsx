import { StyleSheet, Text, View, Image, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { Link } from "expo-router";
import React from 'react'
import newsUnit from '../../components/newsUnit';
import topNewsUnit from '../../components/topNewsUnit';
import customHeader from '../../components/customHeader';

const home = () => {
  const {height, width} = useWindowDimensions();
  var user = "User";
  return (
    <ScrollView className="bg-main" stickyHeaderIndices={[0]}>
    {customHeader(true)}
    <View className="h-[40px]">
      <Text className="font-proxima-bold absolute left-3 text-2xl mt-[12px]">Latest News</Text><Link href="./explore" className="absolute right-3 text-2xl mt-[12px] text-blue-400">See All {'>'}</Link>
    </View>
    <View>
      <ScrollView horizontal={true} className="h-[240px] w-[100%] mt-3" decelerationRate='fast' snapToAlignment={"center"} snapToInterval={width}>
        {topNewsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
        {topNewsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
        {topNewsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
        {topNewsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
        {topNewsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      </ScrollView>
    </View>
      <View>
        <Text className="text-3xl ml-[5%] mt-4 mb-4 font-proxima-bold w-[50%]">Home</Text>
        <Pressable className="absolute font-proxima align-middle mt-4 mb-4 right-3 w-[132px] h-[40px] bg-[#FF3A44] border-white rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xs text-white font-proxima-bold font-bold">Manage tags..</Text>
        </Pressable>
      </View>
      {newsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
    </ScrollView>

  )

}



export default home
