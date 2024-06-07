import { StyleSheet, Text, View, Image, ScrollView, Pressable, useWindowDimensions, PanResponder } from 'react-native';
import { Link, useRouter } from "expo-router";
import React, { useEffect, useState, useLayoutEffect } from 'react'
import NewsUnit from '../../components/newsUnit';
import TopNewsUnit from '../../components/topNewsUnit';
import customHeader from '../../components/customHeader';
import { StatusBar } from 'expo-status-bar';
import BottomPopup from '../../components/BottomPagePopup';
import NewsPage from '../../components/newsPage';
import {getDocuments } from '../../lib/appwrite.js';
import Loading from '../../components/Loading.jsx';

const Home = () => {
  const {height, width} = useWindowDimensions();
  var user = "User";
  const router = useRouter()

  const [showPopup, setShowPopup] = useState(false);

  const [loading, setLoading] = useState(true)
  const [newsList, setNewsList] = useState([])
  
  let componentList;
  let amount = 5;

  useEffect(() => {
    let getDocs = getDocuments(amount, 'business').then(
      (docs) => {
        setNewsList(docs)
        setLoading(false)
      },
      (e) => {console.log(e)}
    )
  }, [newsList])

  return (
    <ScrollView className="bg-main" stickyHeaderIndices={[0]}>
    {customHeader(true)}
    <StatusBar style='dark-content' backgroundColor='white' />
    <Loading isLoading={loading} loadingText={"Loading news..."}/>
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
          togglePopup={setShowPopup}
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
        {(loading) ? <Text>News not yet loaded</Text> : newsList.map((index, i) => {
          return <NewsUnit
            key={i}
            documentID={index.$id}
            title={index.title}
            author={index.author}
            date_published={index.date_published}
            text_content={index.text_content}
            category={index.category}
            image={index.image}
            source={index.source}
            summarized={index.summarized}
            summary={index.summary}
          />;
        })}
      {/* <NewsUnit
      title="Lorem ipsum dolor sit amet"
      author="Generic Writer"
      date_published="02-02-24"
      category="business"
      togglePopup={setShowPopup}
      /> */}

    </ScrollView>

  )

}



export default Home
