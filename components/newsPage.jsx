import { View, Text, ScrollView, Image, Pressable, StatusBar, Modal } from 'react-native'
import React, { useState } from 'react'
import customHeader from './customHeader'
import settingsPopup from './settingsPopup'
import BottomPopup from './BottomPagePopup'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants/icons'

const NewsPage = ({ showNewsPage, toggleNewsPage, setContentArray }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Modal className="absolute w-full h-full" visible={showNewsPage} animationType='fade' transparent={false} onRequestClose={() => {toggleNewsPage(false)}}>
      <ScrollView stickyHeaderIndices={[0]} className="bg-main h-full w-full absolute">
      <BottomPopup showPopup={showPopup} togglePopup={setShowPopup} />
        <StatusBar barStyle={'dark-content'} backgroundColor="white"/>
        <View className="w-full h-[10vh]">
          <TouchableOpacity onPress={() => {toggleNewsPage(false)}} className="aspect-[1/1] h-[95%] w-auto justify-center left-2">
            <Text className="font-proxima-bold text-black text-2xl">
            Back
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full h-[30vh] overflow-hidden">
          <Image source={require("../assets/images/TEST_IMAGE.jpg")} className="align-center absolute object-cover w-[100%] h-[100%]"/>
        </View>
        <View className="w-[85%] h-fit mx-auto mt-[10px]">
          <Text className="font-proxima-bold text-3xl">Lorem ipsum dolor sit amet consectetur</Text>
          <Text className="font-proxima text-sm">by Ryan Browne - 09/04/2024</Text>
        </View>
        <View className="my-[10px] mx-auto w-[85%] h-[25px]">
          <View className="absolute left-0 w-fit h-full rounded-2xl bg-[#FF3A44]">
            <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">Health</Text>
          </View>
          <View className="mr-0 ml-auto w-[55%] h-full">
            <View className="absolute left-0 w-fit h-full rounded-2xl bg-[#FF3A44]">
              <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">Length: Medium</Text>
            </View>
            <TouchableOpacity className="absolute right-0 w-fit h-full rounded-2xl bg-[#FF3A44]" onPressOut={() => {setShowPopup(true)}}>
              <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">...</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mx-auto w-[85%]">
          <Text className="text-justify">
            Lorem ipsum dolor sit amet consectetur. Aliquam tellus eros porttitor maecenas. Sit sapien nec massa mauris posuere nibh venenatis amet ut. Lobortis non laoreet tellus quis lectus blandit. Risus in aliquam facilisi quis etiam vitae aliquet ultricies arcu. Ipsum accumsan nam sit in justo id. Quis nisl non pretium lectus. Nulla nisl porttitor donec eu eros elementum urna in mi. 

  Arcu ultricies sed nisi id etiam amet tellus. Purus sapien bibendum augue mauris nisl massa. Vestibulum senectus mollis egestas aliquet vulputate augue ultrices vitae. Mollis cras et donec lectus cursus. Mattis mi purus feugiat cursus quis. Amet volutpat facilisis id quis magna. Sodales elit et porta donec venenatis sollicitudin facilisi.
          </Text>
        </View>
      </ScrollView>
    </Modal>
  )
}

export default NewsPage