import { View, Image, Text, Pressable } from 'react-native';

export default function newsUnit(title, author, date, tags, short_desc, image){
  return (
    <Pressable className="w-[95%] h-[150px] border-b border-sub p-4 mx-auto justify-center overflow-hidden items-center mb-3">
      <Image className="left-0 absolute object-cover w-[35%] h-[100%] z-10 bg-gradient-to-b from-transparent to-red-500 rounded-xl" source={require("../assets/images/TEST_IMAGE.jpg")} />
      <View className="right-0 ml-[30%] w-[60%] h-[100%] text-left mt-[5%]">
        <Text className="font-proxima-bold text-[15px]">{title}</Text>
        <Text className="font-proxima text-xs">{author} / {date}</Text>
        <View className="w-[32%] h-[12%] rounded border">
          <Text className="font-proxima text-[10px] align-middle justify-center mx-auto my-auto">{tags}</Text>
        </View>
      </View>
      {/* <View className="absolute bg-white z-50 w-[100%] h-[60%] bottom-0">

      </View> */}
    </Pressable>
  )
}