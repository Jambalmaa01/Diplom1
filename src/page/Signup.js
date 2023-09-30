
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import React, { useEffect, useState } from 'react'
import { TextInput, View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { planDay } from '../api/client'
import axios from 'axios'
const Signup = ({navigation}) => {
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword] =useState('')
    const [data, setData]=useState([])
    const apiUrl='http://10.0.1.157:8081/'
  
    const handleSubmit = async () => {
      // if (name === '' || email === '' || password === '') {
      //   alert("All fields are required");
      //   return;
      // }
    //usecontext
      try {
        // const response = await axios.get(apiUrl); // Send a GET request
        const data = await fetch("http://localhost:8081/") 
        let res = data.json()
        console.log(res)
        if (response.status === 201) {
          alert('Signup successful');
          console.log(response.data);
        } else {
          console.error('Unexpected server response:', response.status, response.statusText);
          alert('Signup failed. Please try again later.');
        }
      } catch (error) {
        console.error('Signup failed:', error);
        alert('Signup failed. Please check your network connection and try again.');
      }
    };
    

    // const handleSubmit = async () => {
    
     
    //   if (name == '' || email == '' || password == '') {
    //     alert("All fields are required");
    //     console.log(name)
    //     return;
    //     }try {
    //       console.log(name)
    //     axios.get(apiUrl).then((data)=> console.log(data))
    //     if (res.status === 201) {
    //       alert('Signup successful мро');
    //       console.log(res.data);
    //     } else {
          
    //       console.error('Unexpected server response:', res.status, res.statusText);
    //       console.log(res)
    //       alert('Signup failed. Please try again later.');
    //     }
    //   } catch (error) {
    //     console.error('Signup failed:', error);
    //     console.log(error.message)
    //     alert('Signup failed. Please check your network connection and try again.');
    //   }
    // };

    
    // const handleSubmit=()=>{
    //   var bvrtgel={
    //     Name:name,
    //     Email:email,
    //     Password:password
    //   }
    //   if(name=='' && email==''){
    //     alert("All fields are required");
    //   }
    //   axios.post('https://jambalmaa-1bbe8-default-rtdb.asia-southeast1.firebasedatabase.app/bvrtgel.json', bvrtgel).then(Responce=>{alert('amjiltta bvrtgelee')}).catch((err)=>alert('noo') )
    // }
    // useEffect(() => {
    //   const getData = async () => {
    //     try {
    //       const dat = await planDay();
    //       setData(dat);
    //     } catch (error) {
    //       console.error('Error fetching data:', error); // Use console.error to log the error
    //     }
    //   };
  
    //   getData();
    // }, []);
  
      
  return (  
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
            <View>
              
              {data.map((item)=>(
                <Text >
                  {item.name}
                </Text>
              ))
              
              }
              
            </View>
        </View>
    <View style={styles.container}>
      <View style={styles.bagaContainer}>
       <Text style={styles.singupText}>Sign up</Text>
       <View style={{marginHorizontal:24, marginTop:20}}>
        <Text style={{fontSize:14, color:'black'}}>NAME</Text>
        <TextInput onChangeText={text=>setName(text)} value={name}  autoCapitalize='words' autoCorrect={false} style={styles.singupInput} /> 
       </View>
        <View style={{marginHorizontal:24}}>
        <Text  style={{fontSize:14, color:'black'}}>EMAIL</Text>
        <TextInput onChangeText={text=>setEmail(text)} value={email} autoCompleteType="email" keyboardType='email-address' style={styles.singupInput} />
       </View>
       <View style={{marginHorizontal:24}}>
        <Text style={{fontSize:14, color:'black'}}>PASSWORD</Text>
        <TextInput  onChangeText={text=>setPassword(text)} value={password}  secureTextEntry={true} autoCompleteType="password" style={styles.singupInput} />
       </View>
         <View>
            <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
         </View>
         <View>
            <Text style={{fontSize:16, textAlign:'center', color:'black'}}>Already Joined <Text style={{color:'#8A2BE2', fontWeight:'bold'}} onPress={()=>navigation.navigate("SignIn")}>Sign in</Text> </Text>
            {/* <Text onPress={()=>navigation.navigate("One")}> ONE</Text> */}
         </View>
         </View>
    </View>
    </KeyboardAwareScrollView>
  )
}
 const  styles =  StyleSheet.create({
    container:{
        // flex:1,
        display:'flex',
        justifyContent:'center',
       },
      
      bagaContainer:{
        width:'80%',
        marginHorizontal:40,
       
      },
    singupInput:{
        borderBottomWidth:0.5,
        height:48,
        borderBottomColor:'black',
        marginBottom:30
    },
    singupText:{
        marginTop:100,
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
        borderRadius:15
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
export default Signup