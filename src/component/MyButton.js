
import React from 'react'
import { Button, View } from 'react-native'

const MyButton = ({btnTitle, onClick}) => {
  return (
    <View>
        <Button onPress={onClick} title={btnTitle}/>
    </View>
  )
}

export default MyButton