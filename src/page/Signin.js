import axios from 'axios'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import React, { useEffect, useState } from 'react'

import { TextInput, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'

const Signin = ({navigation}) => {
    const [email1, setEmail]=useState('')
    const [password1, setPassword] =useState('')
    const [data, setData]=useState([])
    // const handleSubmit1=async()=>{
    //     if( email=='' && password==''){
    //         alert("all field are required")
    //         return;
    //     }
    //     else{
    //         await axios.post("http://localhost:8081/api/Signin", { email, password})
    //         // alert('sing up successful')
    //         alert('amjilttai')
    //     }
        
    // }
 useEffect(()=>{
    axios.get('https://jambalmaa-1bbe8-default-rtdb.asia-southeast1.firebasedatabase.app/bvrtgel.json').then(Response=>{setData(Object.values(Response.data))})
 },[])
    const handleSubmit1=()=>{
        const userMatch=data.find((el)=>el.Email===email1 && el.Password===password1)
        data.map((el)=>{
            if(userMatch){
                
               navigation.navigate("OneFace", {Name:userMatch.Name})
            }else{
               
            }
        })
    }
  return (  
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>

    <View style={styles.container}>
        
            <View style={styles.bagaContainer}>
       <Text style={styles.singupText}>Sign in</Text>
        <View style={{marginHorizontal:24, marginTop:30}}>
        <Text  style={{fontSize:14, color:'black'}}>EMAIL</Text>
        <TextInput onChangeText={text=>setEmail(text)} value={email1} autoCompleteType="email" keyboardType='email-address' style={styles.singupInput} />
       </View>
       <View style={{marginHorizontal:24}}>
        <Text style={{fontSize:14, color:'black'}}>PASSWORD</Text>
        <TextInput  onChangeText={text=>setPassword(text)} value={password1}  secureTextEntry={true} autoCompleteType="password" style={styles.singupInput} />
       </View>
         <View>
            <TouchableOpacity onPress={handleSubmit1} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, textAlign: 'center' }}>Not yet registered? <Text style={{color:'#8A2BE2', fontWeight:'bold'}} onPress={()=> navigation. navigate("SignUp")}>Sign up</Text></Text>
                <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 10 }}>Forgot Password?</Text>
         </View>
        
         </View>
       
    </View>
    </KeyboardAwareScrollView>
  )
}
 const  styles =  StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        
        
       },
       bagaContainer:{
         width:'80%',
         marginHorizontal:40,
         height:'70%',
        marginTop:20
       },
    singupInput:{
        borderBottomWidth:0.5,
        height:48,
        borderBottomColor:'black',
        marginBottom:30,
        
    },
    singupText:{
        marginTop:-20,
        fontSize:30,
        textAlign:'center',
        color:'#8A2BE2',
        fontWeight:'bold'
        
        
    },
    buttonStyle:{
        backgroundColor:'#8A2BE2',
        height:50,
        marginBottom:20,
        justifyContent:'center',
        marginHorizontal:15,
        borderRadius:15,
        
    },
    buttonText:{
        fontSize:20,
        textAlign:'center',
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    imageContainer:{justifyContent:'center', alignItems:'center'},
    imageStyles:{ width:100, height:100, marginVertical:20}
 })
export default Signin