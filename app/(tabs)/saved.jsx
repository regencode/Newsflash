import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import NewsUnit from '../../components/newsUnit';
import customHeader from '../../components/customHeader';

const saved = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} className="bg-main">
      {customHeader()}
      <Text className="text-3xl ml-[5%] mt-4 mb-4 font-proxima">Saved</Text>
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

export default saved
