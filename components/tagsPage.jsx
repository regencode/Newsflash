import { View, Text, Pressable, StatusBar, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import customHeaderNoProfile from './customHeaderNoProfile'
import { TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const TagButton = ({logo, text, enable, setEnable, category}) => { // business, entertainment, health, science, sports, technology
    buttonTrue = "w-[90%] h-[50px] mx-auto mb-[10px] border-black bg-[#FF3A44] border-2 rounded-3xl"
    buttonFalse = "w-[90%] h-[50px] mx-auto mb-[10px] border-black border-2 rounded-3xl"

    textTrue = "font-proxima text-center my-auto text-white"
    textFalse = "font-proxima text-center my-auto text-black"
    return (
        <TouchableOpacity className={(enable) ? buttonTrue : buttonFalse} onPressOut={() => {setEnable(!enable)}}>
            <Text className={(enable) ? textTrue : textFalse}>{logo}     {text}</Text>
        </TouchableOpacity>
    );
}

export default function TagsPage({showTagsPage, setVisible, tagsList, setTagsList}) {
    const router = useRouter();
    const [business, setBusiness] = useState(false)
    const [entertainment, setEntertainment] = useState(false)
    const [health, setHealth] = useState(false)
    const [science, setScience] = useState(false)
    const [sports, setSports] = useState(false)
    const [technology, setTechnology] = useState(false)

    useEffect(() => {
        if(!showTagsPage){
            console.log("tags page not opened")
            
        }
        else {
            setBusiness(isContained("business", tagsList))
            setEntertainment(isContained("entertainment", tagsList))
            setHealth(isContained("health", tagsList))
            setScience(isContained("science", tagsList))
            setSports(isContained("sports", tagsList))
            setTechnology(isContained("technology", tagsList))
            return
        }
    }, [showTagsPage])

    function isContained(obj, container){
        for(let i = 0; i < container.length; i++){
            if(container[i] === obj){
                return true 
            }
        }
        return false
    }


    function exportNewTags(){
        let newTagsList = []
        if(business === true){
            newTagsList.push("business")
        }
        if(entertainment === true){
            newTagsList.push("entertainment")
        }
        if(health === true){
            newTagsList.push("health")
        }
        if(science === true){
            newTagsList.push("science")
        }
        if(sports === true){
            newTagsList.push("sports")
        }
        if(technology === true){
            newTagsList.push("technology")
        }
        console.log(newTagsList)
        if(newTagsList.length > 0){
            setTagsList(newTagsList)
            console.log(tagsList)
            setVisible(false)
        }

    }
  return (
    <Modal visible={showTagsPage} className="w-[100%] h-[100%]">
        {customHeaderNoProfile()}
        <StatusBar barStyle={'dark-content'} />
        <Text className="font-proxima-bold mt-[5%] mx-auto text-3xl text-center mb-[10%]">Select your interests (minimum 2)</Text>
        <View className="mb-3">
            <TagButton logo="💼" text="Business" enable={business} setEnable={setBusiness}/>
            <TagButton logo="🎯" text="Entertainment" enable={entertainment} setEnable={setEntertainment}/>       
            <TagButton logo="👨‍⚕️" text="Health" enable={health} setEnable={setHealth}/>
            <TagButton logo="🧪" text="Science" enable={science} setEnable={setScience}/>
            <TagButton logo="⚽" text="Sports" enable={sports} setEnable={setSports}/>
            <TagButton logo="🤖" text="Technology" enable={technology} setEnable={setTechnology}/>
        </View>
        <TouchableOpacity onPressOut={() => {exportNewTags()}} className="font-proxima align-middle mx-auto relative w-[226px] h-[51px] bg-[#FF3A44] border-white mb-[20px] rounded-[30px] border">
        <Text className="relative align-middle justify-center m-auto text-xl text-white font-proxima-bold font-bold">Login</Text>
        </TouchableOpacity>
    </Modal>

  )
}

