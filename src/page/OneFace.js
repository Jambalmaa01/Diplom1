import React from 'react'
import {Image, View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'

const OneFace = () => {
    // const route=useRoute()
    // const {Name}=route.params
  return (
    <View style={styles.container}>
        <View>
            <Text>Тавтай морил</Text>
           {/* <Text>Use name:{Name}</Text> */}
        </View>
        <Text>Өдрийн мэнд</Text>
        <View></View>
        <Image style={{ marginTop:80, width:'80%', height:'40%'}} source={require('../../assets/image/how-to-create-a-work-schedule-blog-insert-8-build-your-work-schedule.png')} />
        <Text>өнөөдөр юу хийх хэрэгтэй вэ?</Text>
        <Text>Даалгавар нэмэх </Text>
        <View>
            
        </View>
         
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
})

export default OneFace