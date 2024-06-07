import { View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import TagContainer from './TagContainer';
import NewsPage from './newsPage';
import BottomPopup from './BottomPagePopup';

const NewsUnit = ({ documentID, title, category, text_content, source, image, author, date_published, summarized, summary, togglePopup, toggleNewsPage, setContentArray }) => {
  const [showNewsPage, setShowNewsPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [contentSummarized, setContentSummarized] = useState(summarized)
  const [documentState, setDocumentState] = useState({
    documentID: documentID,
    title: title,
    category: category,
    text_content: text_content,
    source: source,
    image: image,
    author: author,
    date_published: date_published,
    summarized: summarized,
    summary: summary
  })
  return (
    <TouchableOpacity
      onLongPress={() => {
        console.log(documentState);
        setShowNewsPage(true);
      }}
      className="w-[92%] h-[128px] border-b border-sub mx-auto justify-center overflow-hidden items-center mb-3 rounded-xl bg-[rgba(0,0,0,.6)]"
    >
      <BottomPopup showPopup={showPopup} togglePopup={setShowPopup}/>
      <NewsPage
        showNewsPage={showNewsPage}
        toggleNewsPage={setShowNewsPage}
        documentID={documentState.documentID}
        title={documentState.title}
        category={documentState.category}
        text_content={documentState.text_content}
        source={documentState.source}
        image={documentState.image}
        author={documentState.author}
        date_published={documentState.date_published}
        summarized={contentSummarized}
        setSummarized={setContentSummarized}
        summary={documentState.summary}
        isOpened={showNewsPage}
        showPopup={showPopup}
        togglePopup={setShowPopup}
      />
      <Image
        className="align-center absolute object-cover w-[100%] h-[100%]"
        source={{ uri: image }}
      />
      <View className="absolute align-center w-[100%] h-[100%] bg-black opacity-60"></View>
      <View className="align-center w-[90%] h-[80%] text-left mx-auto my-auto">
        <Text className="font-proxima-bold text-[15px] text-white">
          {title}
        </Text>
        <Text className="font-proxima text-xs text-white">
          {author} / {date_published}
        </Text>
        <TagContainer text={category} />
      </View>
      <TouchableOpacity
        onPressOut={() => {
          setShowPopup(true);
        }}
        className="absolute right-2 bottom-2 bg-[#FF3A44] aspect-[37/25] h-[25%] w-auto text-center rounded-lg"
      >
        <Text className="text-white font-proxima-bold text-center text-xl">
          ...
        </Text>
      </TouchableOpacity>
      {/* <View className="absolute bg-white z-50 w-[100%] h-[60%] bottom-0">

      </View> */}
    </TouchableOpacity>
  );
}

export default NewsUnit;