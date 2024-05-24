import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import newsUnit from '../../components/newsUnit';
import customHeader from '../../components/customHeader';

const saved = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} className="bg-main">
      {customHeader()}
      <Text className="text-3xl ml-[5%] mt-4 mb-4 font-proxima">Saved</Text>
      {newsUnit("TITLE", "Generic Writer", "02-02-24", "business", "THIS IS A TEST", "none")}
    </ScrollView>
  )
}

export default saved
