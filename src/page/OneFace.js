import React, {useState, useEffect} from 'react'
import {Image, View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal  from 'react-native-modal';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import daysjs from 'dayjs'
const OneFace = () => {
    // const route=useRoute()
    // const {Name}=route.params
    const [isModalVisible, setIsModalVisible]=useState(false)
    const [isModalVisible1, setIsModalVisible1]=useState(false)
    const [selected, setSelected]=useState('')
    const handleClick=()=>{
       setIsModalVisible(!isModalVisible)
    } 
    const handleClick1=()=>{
      setIsModalVisible1(!isModalVisible1)
    }
    // const formatSelectedDate = () => {
    //   if (!selected) {
    //     return '';
    //   }
    //   const selectDate = new Date(selected);
    //   const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //   return selectDate.toLocaleDateString(undefined, options);
    // };
  
    // // Use useEffect to log the selected value after it's updated
    // useEffect(() => {
    //   console.log('Selected Date:', selected);
    // }, [selected]); // This ensures the effect runs whenever selected changes
  
    
  return (
    <View style={styles.container} >
        <View style={styles.proDiv}>
        <View style={styles.iconPro}>
           <Ionicons name="person" size={40} color="#808080" />
        </View >
           <View style={{marginLeft:15}}>
            <Text style={{color:'#808080', marginTop:9 }}>Тавтай морил</Text>
           {/* <Text>Use name:{Name}</Text> */}
           <Text style={{color:'#8A2BE2', fontSize:18, marginTop:2}}>Jambalmaa</Text>
           </View>
        </View> 
        <Text style={styles.mend}>Өдрийн мэнд</Text>
        {/* <View> */}
          {/* <Text>{daysjs().format("dddd, DD MMMM")}</Text> */}
          {/* <Text>{daysjs().format("hh:mm")}</Text> */}
          {/* <Text>{daysjs().year()}</Text> */}
        {/* </View> */}
      
        {/* <View>
  <Calendar
    onDayPress={(day) => {
      setSelected(day.dateString);
    }}
    markedDates={{
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedDotColor: 'orange',
      },
    }}
  />

<Text>Selected Date: {selected}</Text>


        </View> */}

        <Image style={{ marginTop:55, width:'80%', height:'40%'}} source={require('../../assets/image/how-to-create-a-work-schedule-blog-insert-8-build-your-work-schedule.png')} />
        <Text style={{marginTop:30, color:'#696969'}}>өнөөдөр юу хийх хэрэгтэй вэ?</Text>
        <Text style={{marginTop:20, color:'#696969'}}>Даалгавар нэмэх </Text>
        <View style={styles.bottomDiv}>
        <AntDesign onPress={handleClick} name="profile" size={27} color="#696969" />
        <MaterialIcons onPress={handleClick1 } name="add-task" size={28} color="#696969" />
        <Ionicons name="today-sharp" size={28} color="#696969" />
        <Modal isVisible={isModalVisible}>
          
            <View style={styles.toggle}>
              <View style={styles.toggle1}>
            <Ionicons name="today-sharp" size={25} color="#696969" />
            <Text style={styles.ner}>Daily rounting</Text>
            </View>
            <View style={styles.toggle1}>
            <AntDesign name="Trophy" size={25} color="#696969" />
            <Text style={styles.ner}>Зорилго</Text>
            </View>
            <View style={styles.toggle1}>
            <Ionicons name="stats-chart-outline" size={25} color="#696969" />
            <Text style={styles.ner}>Статистик</Text>
            </View>
            <View style={styles.toggle1}>
            <Ionicons name="people-outline" size={25} color="#696969" />
            <Text style={styles.ner}>Түнш</Text>
            </View>
            <View style={styles.toggle1}>
            <MaterialIcons name="category" size={25} color="#696969" />
            <Text style={styles.ner}>Ангилал</Text>
            </View>
            <View style={{width:182, height:1, backgroundColor:"#696969", marginLeft:21, marginTop:20}}></View>
            <View style={styles.toggle1}>
            <MaterialCommunityIcons name="file-check-outline" size={25} color="#696969" />
            <Text style={styles.ner}>Маргаашийн даалгавар</Text>
            </View>
            <View style={styles.toggle1}>
            <FontAwesome5 name="tasks" size={25} color="#696969" />
            <Text style={styles.ner}>Даалгаврын сан</Text>
            </View>
            <View style={styles.toggle1}>
            <Ionicons name="archive-outline" size={25} color="#696969" />
            <Text style={styles.ner}>Архивлагдсан </Text>
            </View>
            <View style={{width:182, height:1, backgroundColor:"#696969", marginLeft:21, marginTop:20}}></View>
            <View style={styles.toggle1}>
            <Ionicons name="person-outline" size={25} color="#696969" />
            <Text style={styles.ner}>Миний намтар</Text>
            </View>
            <View style={styles.toggle1}>
            <MaterialIcons name="settings-applications" size={25} color="#696969" />
            <Text style={styles.ner}>Сонголт</Text>
            </View>
            <View style={styles.toggle1}>
            <Ionicons name="md-settings-outline" size={25} color="#696969" />
            <Text style={styles.ner}>Тохиргоо</Text>
            </View>
            <View style={{width:182, height:1, backgroundColor:"#696969", marginLeft:21, marginTop:20}}></View>
            <View style={styles.toggle1}>
            <MaterialCommunityIcons name="email-outline" size={25} color="#696969" />
            <Text style={styles.ner}>бидэнд имэйл илгээх</Text>
            </View>
            <View style={styles.toggle1}>
            <AntDesign name="exclamationcircleo" size={25} color="#696969" />
            <Text style={styles.ner}>Бидний тухай</Text>
            </View>
            <View style={{ marginTop:25, marginLeft:20}}>
            <TouchableOpacity onPress={handleClick}>
              
              <Text><AntDesign name="arrowleft" size={25} color="#696969" /></Text>
            </TouchableOpacity>
            </View>
            </View>
        </Modal>
        <Modal isVisible={isModalVisible1}>
            <View style={styles.toggle2}>
              <Text>Даалгавар нэмэх</Text>
              <Text>Юу хийх шаардлагатай вэ?</Text>
              <TextInput style={styles.addTaskInput}/>
            </View>
        </Modal>
        </View>
        
         
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        flex:1
        
    },
    proDiv:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'flex-start',
      marginLeft:-160,
      marginTop:15
    },
    mend:{
      fontSize:30,
      color:'#696969',
      marginLeft:-130,
      marginTop:25
    },
    iconPro:{
      width:50,
      height:50,
      backgroundColor:'#C0C0C0',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:2
    }, 
    bottomDiv:{
      width:'100%',
      height:'10%',
      backgroundColor:'#C0C0C0',
      marginTop:81,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center'
    },
    toggle:{
      width:250,
      height:773,
      borderRadius:5,
      backgroundColor:'white',
      marginLeft:-17
    },
    toggle1:{
      display:'flex',
      flexDirection:'row',
      marginTop:21,
      marginLeft:20
    },
    ner:{
      color:'#696969',
      marginLeft:5,
      marginTop:6
    },
    toggle2:{
      width:'100%',
      height:'30%',
      backgroundColor:'white'
    },
    // addTaskInput:{
    //    width:250,
    //    height:30,
    //   //  backgroundColor:'black',
    //    border:'1px solid  #696969'
    // }
    

    

})

export default OneFace;