import { Modal, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const BottomPopup = () =>{
    
    const [openModal, setOpenModal]=React.useState(false)

    function renderModal(){
        return (
            <Modal visible={openModal} animationType='slide' transparent={true}>
                <View className='absolute flex-1 justify-center items-center bg-transparent  h-full w-full'>
                    <View className='absolute bg-white w-full h-3/6 border-r-10 bottom-0'>
                        <TouchableOpacity className='items-center py-5'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Save Article</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center py-5'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Add/Remove Tag</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='items-center py-5'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Go to Original Article</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setOpenModal(false)}
                        className='items-center py-5'>
                            <Text className='text-center text-2xl border-2 px-20 py-4 rounded-full w-11/12'>Back</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </Modal>
        )
    }

    return(
        <View>
            <Text>
    
            </Text>
            <TouchableOpacity className="justify-center items-center rounded-xl bg-[#35b0f8]"
            onPress={() => setOpenModal(true)}>
                <Text className="font-proxima-bold text-white mx-3 my-auto align-middle">...</Text>
            </TouchableOpacity>
            {renderModal()}
        </View>

    )
}

export default BottomPopup;