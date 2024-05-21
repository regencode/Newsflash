import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import newsUnit from '../../components/newsUnit';

const home = () => {
  var user = "User";
  return (
    <ScrollView className="bg-main">
      <Text className="text-3xl ml-[5%] mt-4 mb-4 font-proxima">Home</Text>
      {newsUnit("Lorem ipsum dolor sit amet", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
    </ScrollView>

  )

}



export default home
