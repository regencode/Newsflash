import { View, Image, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

const NewsUnit = ({ title, author, date, tags}) => {
  return (
    <TouchableOpacity className="w-[92%] h-[128px] border-b border-sub mx-auto justify-center overflow-hidden items-center mb-3 rounded-xl bg-[rgba(0,0,0,.6)]">
      <Image className="align-center absolute object-cover w-[100%] h-[100%]" source={require("../assets/images/TEST_IMAGE.jpg")} />
      <View className="absolute align-center w-[100%] h-[100%] bg-black opacity-30"></View>
      <View className="align-center w-[90%] h-[80%] text-left mx-auto my-auto">
        <Text className="font-proxima-bold text-[15px] text-white">{title}</Text>
        <Text className="font-proxima text-xs text-white">{author} / {date}</Text>
        <View className="w-[20%] h-[12%] rounded border border-white">
          <Text className="font-proxima text-[10px] align-middle justify-center mx-auto my-auto text-white">{tags}</Text>
        </View>
      </View>
      <TouchableOpacity className="absolute right-1 bottom-1 bg-[#FF3A44] aspect-square h-[30%] w-auto text-center rounded-2xl">
        <Text className="text-white font-proxima-bold text-center text-xl">...</Text>
      </TouchableOpacity>
      {/* <View className="absolute bg-white z-50 w-[100%] h-[60%] bottom-0">

      </View> */}
    </TouchableOpacity>
  )
}

export default NewsUnit;