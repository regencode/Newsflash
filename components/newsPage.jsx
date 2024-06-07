import { View, Text, ScrollView, Image, Pressable, StatusBar, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import customHeader from './customHeader'
import settingsPopup from './settingsPopup'
import BottomPopup from './BottomPagePopup'
import { TouchableOpacity } from 'react-native'
import { icons } from '../constants/icons'
import { getGroqSummary } from '../lib/groq'
import Loading from './Loading'
import { markAsSummarized } from '../lib/appwrite'

const NewsPage = ({ documentID, title, category, text_content, source, image, author, date_published, summarized, setSummarized, summary, showNewsPage, toggleNewsPage, isOpened }) => {
  const [content, setContent] = useState(summary)
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!summarized) {
      // create summary
      setLoading(true)
      let generatedSummary = getGroqSummary(text_content).then(
        (text) => {
          setContent(text.choices[0]?.message?.content)
          setSummarized(true)
          markAsSummarized(documentID, text)
          setLoading(false)

          // update database
        },
        (e) => { console.log(e) }
      );
    }
  }, [isOpened]);
  
  return (
    <Modal className="absolute w-full h-full" visible={showNewsPage} animationType='fade' transparent={false} onRequestClose={() => {toggleNewsPage(false)}}>
    <Loading isLoading={loading} loadingText={"Summarizing news..."}/>
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
          <Image source={{uri: image}} className="align-center absolute object-cover w-[100%] h-[100%]"/>
        </View>
        <View className="w-[85%] h-fit mx-auto mt-[10px]">
          <Text className="font-proxima-bold text-3xl">{title}</Text>
          <Text className="font-proxima text-sm">by {author} - {date_published}</Text>
        </View>
        <View className="my-[10px] mx-auto w-[85%] h-[25px]">
          <View className="absolute left-0 w-fit h-full rounded-2xl bg-[#FF3A44]">
            <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">{category}</Text>
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
          <Text className="font-proxima-bold text-justify"> {/* todo: replace with summary later */}
            {content}
          </Text>
        </View>
      </ScrollView>
    </Modal>
  )
}

export default NewsPage