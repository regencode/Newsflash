import { StyleSheet, Text, View, Image, ScrollView, Pressable, useWindowDimensions, PanResponder } from 'react-native';
import { Link, useRouter } from "expo-router";
import React, { useState } from 'react'
import NewsUnit from '../../components/newsUnit';
import TopNewsUnit from '../../components/topNewsUnit';
import customHeader from '../../components/customHeader';

const home = () => {
  const {height, width} = useWindowDimensions();
  var user = "User";
  const router = useRouter()
  function goToNewsPage(){
    return router.push("../newsPage")
  }
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("tap")
      },
      onPanResponderMove: (evt, gestureState) => {
        if(Math.abs(gestureState.dx) > 10 || Math.abs(gestureState.dy) > 10)
        console.log("scrolling")
        return;
      },
      onPanResponderRelease: (gestureState) => {
        console.log("release")
      },
      onPanResponderTerminationRequest: () => false
    })
  );
  return (
    <ScrollView {...panResponder.panHandlers} className="bg-main" stickyHeaderIndices={[0]}>
    {customHeader(true)}
    <View className="h-[40px]">
      <Text className="font-proxima-bold absolute left-3 text-2xl mt-[12px]">Latest News</Text><Link href="./explore" className="absolute right-3 text-2xl mt-[12px] text-blue-400">See All {'>'}</Link>
    </View>
    <View>
      <ScrollView horizontal={true} className="h-[240px] w-[100%] mt-3" decelerationRate='fast' snapToAlignment={"center"} snapToInterval={width}> 
        <TopNewsUnit
          title="Lorem ipsum dolor sit amet"
          author="Generic Writer"
          date="02-02-24"
          tags="business"  
        />
        <TopNewsUnit
          title="Lorem ipsum dolor sit amet"
          author="Generic Writer"
          date="02-02-24"
          tags="business"  
        />
        <TopNewsUnit
          title="Lorem ipsum dolor sit amet"
          author="Generic Writer"
          date="02-02-24"
          tags="business"  
        />
        <TopNewsUnit
          title="Lorem ipsum dolor sit amet"
          author="Generic Writer"
          date="02-02-24"
          tags="business"  
        />
      </ScrollView>
    </View>
      <View>
        <Text className="text-3xl ml-[5%] mt-4 mb-4 font-proxima-bold w-[50%]">Home</Text>
        <Pressable className="absolute font-proxima align-middle mt-4 mb-4 right-3 w-[132px] h-[40px] bg-[#FF3A44] border-white rounded-[30px] border">
          <Text className="relative align-middle justify-center m-auto text-xs text-white font-proxima-bold font-bold">Manage tags..</Text>
        </Pressable>
      </View>
      <NewsUnit
      title="Lorem ipsum dolor sit amet"
      author="Generic Writer"
      date="02-02-24"
      tags="business"
      />
      <NewsUnit
      title="Lorem ipsum dolor sit amet"
      author="Generic Writer"
      date="02-02-24"
      tags="business"
      />
      <NewsUnit
      title="Lorem ipsum dolor sit amet"
      author="Generic Writer"
      date="02-02-24"
      tags="business"
      />
      <NewsUnit
      title="Lorem ipsum dolor sit amet"
      author="Generic Writer"
      date="02-02-24"
      tags="business"
      />
    </ScrollView>

  )

}



export default home
