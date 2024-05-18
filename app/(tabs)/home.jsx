import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const home = () => {
  return (
    <ScrollView>
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
    </ScrollView>

  )

function newsUnit(title, author, date, tags, short_desc, image){
  return (
    <View className="w-[95%] h-[225px] border-black border rounded-2xl mx-auto justify-center overflow-hidden items-center">
      <Image className="absolute object-cover w-[100%] h-[100%] z-10 bg-gradient-to-b from-transparent to-red-500" source={require("../../assets/images/TEST_IMAGE.jpg")} />
    </View>
  )
}

}



export default home
