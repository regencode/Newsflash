import { View, Text, ScrollView, Image, Pressable, StatusBar, TouchableOpacity, Modal} from 'react-native'
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
import React from 'react'
import customHeader from '../components/customHeader'
import settingsPopup from '../components/settingsPopup'





const newsPage = () => {
  const [openModal, setOpenModal]=React.useState(false)

    function renderModal(){
        return (
            <Modal visible={openModal} animationType='slide' transparent={true}>
                <View className='absolute flex-1 justify-center items-center bg-transparent  h-full w-full'>
                    <View className='absolute bg-white w-full h-2/4 border-r-10 bottom-0'>
                        <TouchableOpacity className='items-center py-5'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Save Article</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center '>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Add/Remove Tag</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center py-5'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Go to Original Article</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setOpenModal(false)}
                        className='items-center'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Back</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
        )
    }


  return (
    <ScrollView stickyHeaderIndices={[0]} className="bg-main">
      {customHeader(true)}
      

      <StatusBar barStyle={'dark-content'} />
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
          <TouchableOpacity className="absolute right-0 w-fit h-full rounded-2xl bg-[#FF3A44]" onPress={() => setOpenModal(true)}>
            <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">...</Text>
          </TouchableOpacity>
          {renderModal()}
        </View>
      </View>
      <View className="mx-auto w-[85%]">
        <Text className="text-justify">
          Lorem ipsum dolor sit amet consectetur. Aliquam tellus eros porttitor maecenas. Sit sapien nec massa mauris posuere nibh venenatis amet ut. Lobortis non laoreet tellus quis lectus blandit. Risus in aliquam facilisi quis etiam vitae aliquet ultricies arcu. Ipsum accumsan nam sit in justo id. Quis nisl non pretium lectus. Nulla nisl porttitor donec eu eros elementum urna in mi. 

Arcu ultricies sed nisi id etiam amet tellus. Purus sapien bibendum augue mauris nisl massa. Vestibulum senectus mollis egestas aliquet vulputate augue ultrices vitae. Mollis cras et donec lectus cursus. Mattis mi purus feugiat cursus quis. Amet volutpat facilisis id quis magna. Sodales elit et porta donec venenatis sollicitudin facilisi.
        </Text>
      </View>

    </ScrollView>
    )
  }

export default newsPage
