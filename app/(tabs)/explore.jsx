import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import NewsUnit from '../../components/newsUnit'
import customHeader from '../../components/customHeader'

const Explore = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} className="bg-main">
    {customHeader(true)}
    <StatusBar style='dark-content' />
      <Text className="text-3xl ml-[5%] mt-4 mb-4 font-proxima">Explore</Text>
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

export default Explore
