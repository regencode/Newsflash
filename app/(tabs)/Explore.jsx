import { StyleSheet, Text, View, Image, ScrollView, Pressable, useWindowDimensions, PanResponder, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
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
import TagsPage from '../../components/tagsPage.jsx';
import { searchDocuments } from '../../lib/appwrite.js';

const Explore = () => {
  const {height, width} = useWindowDimensions();
  var user = "User";
  const router = useRouter()

  const [showTagsPage, setShowTagsPage] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [loading, setLoading] = useState(false)
  const [newsList, setNewsList] = useState([])

  const [query, setQuery] = useState('')
  const [searchText, setSearchText] = useState('')

  let amount = 15;

  async function searchForQuery(query){
    let documents = await searchDocuments(query)
    return documents 
  }

  useEffect(() => {
    if(query === ''){
      return
    }
    setLoading(true)
    let getDocs = searchForQuery(query).then(
      (docs) => {
        console.log(docs)
        setNewsList(docs)
        setLoading(false)
      },
      (e) => {console.log(e)}
    )
    setLoading(false)

  }, [query])

  return (
    <ScrollView stickyHeaderIndices={[0]} className="bg-main">
      {customHeader(true)}
      <StatusBar style="dark-content" />
      <View className="relative align-middle w-[90%] h-[50px] mx-auto border-gray-400 border rounded-lg bg-white mt-[5vh] mb-[5vh]">
        <TextInput
          placeholder="Search for news..."
          mode="outlined"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          onEndEditing={() => {
            setQuery(searchText)
          }}
          className="font-proxima align-middle w-[80%] mx-auto border-black my-[10px] text-xl"
        />
      </View>
      {loading ? (
        <View className="mt-5">
          <ActivityIndicator />
          <Text className="font-proxima-bold mx-auto">Loading...</Text>
        </View>
      ) : (
        newsList.map((index, i) => {
          return (
            <NewsUnit
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
            />
          );
        })
      )}
    </ScrollView>
  );
}

export default Explore
