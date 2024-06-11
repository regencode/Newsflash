import { Modal, TouchableOpacity, View, Text, Linking } from 'react-native'
import React from 'react'

const BottomPopup = ({ showPopup, togglePopup, originalUrl }) =>{

    function handleUrl(){
        console.log(originalUrl)
        Linking.openURL(originalUrl)
    }

    return (
        <Modal visible={ showPopup } animationType='slide' transparent={true}>
            <View className="absolute align-center w-[100%] h-[1000%] bg-black opacity-30"></View>
            <View className='absolute flex-1 justify-center items-center bg-transparent  h-full w-full'>
                <View className='absolute bg-white aspect-[440/359] w-full h-auto  border-r-10 bottom-0'>
                    <TouchableOpacity className='mx-auto items-center mt-5 rounded-3xl bg-[#4D4D4D] aspect-[309/51] w-[85vw] h-auto'>
                        <Text className="font-proxima-bold text-white text-xl align-middle my-auto">Save Article</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  className='mx-auto items-center mt-5 rounded-3xl bg-[#4D4D4D] aspect-[309/51] w-[85vw] h-auto'>
                        <Text className="font-proxima-bold text-white text-xl align-middle my-auto">Add/Remove tag</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleUrl() }} className='mx-auto items-center mt-5 rounded-3xl bg-[#4D4D4D] aspect-[309/51] w-[85vw] h-auto'>
                        <Text className="font-proxima-bold text-white text-xl align-middle my-auto">Go to Original Article</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{ togglePopup(false) }} className='mx-auto items-center mt-5 rounded-3xl border-2 border-[#4D4D4D] bg-white aspect-[309/51] w-[85vw] h-auto'>
                        <Text className="font-proxima-bold text-[#4D4D4D] text-xl align-middle my-auto">Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )


    // return(
    //     <View>
    //         <Text>
    
    //         </Text>
    //         <TouchableOpacity className="justify-center items-center rounded-xl bg-[#35b0f8]"
    //         onPress={() => setOpenModal(true)}>
    //             <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">...</Text>
    //         </TouchableOpacity>
    //         {renderModal()}
    //     </View>

    // )
}

export default BottomPopup;