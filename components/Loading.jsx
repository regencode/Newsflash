import { View, Text, ActivityIndicator, Modal } from 'react-native'
import React from 'react'

const Loading = ( {isLoading, loadingText} ) => {
    return (
        <Modal visible={isLoading} transparent={false}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator/>
                <Text className="font-proxima-bold">{loadingText}</Text>
            </View>
        </Modal>

    )
}

export default Loading