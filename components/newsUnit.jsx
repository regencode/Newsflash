import { View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import TagContainer from './TagContainer';

const NewsUnit = ({ title, author, date, tags, togglePopup, toggleNewsPage, setContentArray }) => {
  return (
    <TouchableOpacity onLongPress={() => {toggleNewsPage(true)}} className="w-[92%] h-[128px] border-b border-sub mx-auto justify-center overflow-hidden items-center mb-3 rounded-xl bg-[rgba(0,0,0,.6)]">
      <Image className="align-center absolute object-cover w-[100%] h-[100%]" source={require("../assets/images/TEST_IMAGE.jpg")} />
      <View className="absolute align-center w-[100%] h-[100%] bg-black opacity-30"></View>
      <View className="align-center w-[90%] h-[80%] text-left mx-auto my-auto">
        <Text className="font-proxima-bold text-[15px] text-white">{title}</Text>
        <Text className="font-proxima text-xs text-white">{author} / {date}</Text>
      <TagContainer text={tags} />
      </View>
      <TouchableOpacity onPressOut={() => {togglePopup(true)}} className="absolute right-2 bottom-2 bg-[#FF3A44] aspect-[37/25] h-[25%] w-auto text-center rounded-lg">
        <Text className="text-white font-proxima-bold text-center text-xl">...</Text>
      </TouchableOpacity>
      {/* <View className="absolute bg-white z-50 w-[100%] h-[60%] bottom-0">

      </View> */}
    </TouchableOpacity>
  )
}

export default NewsUnit;