import React,{useRef, useState} from 'react'
import Swiper from 'react-native-swiper'
import { View, Text, StyleSheet, ImageBackground, Image, Button } from 'react-native'
const Home = ({navigation}) => {
    const swiperRef=useRef(null)
    const [showSignButton, setShowSignButton]=useState(false)
    const [currentIndex, setCurrentIndex]=useState(0)
    const totalSlide=4
    
    const handlaNextSlide=()=>{
           if(swiperRef.current){
            swiperRef.current.scrollBy(1)
           }
    }
    const handleSlideChange = (index) => {
      setCurrentIndex(index)
      // console.log(`Current Index: ${index}, Total Slides: ${total}`);
      if (index === totalSlide-1) {
        setShowSignButton(true);
      } else {
        setShowSignButton(false);
      }
    };
   
    
  return (
    <View style={css.container}>
    <Swiper ref={swiperRef} loop={false} index={currentIndex} onIndexChanged={handleSlideChange}>
    <View  style={css.twoFace}>
       {/* <View style={{display:'flex', flexDirection:'row', marginTop:20}}>
       <Text style={{fontSize:35,  fontWeight:'bold', color:'#8A2BE2'}}>Daily </Text>
       <Text  style={{marginTop:20, fontSize:18, color:'#8A2BE2'}} >-д тавтай морил</Text>
       </View> */}
       
       <Image style={{width:'80%', height:'40%', resizeMode:"cover", marginTop:85}} source={require('../../assets/image/clock.jpg')}/>
       <Text style={{marginTop:30, fontWeight:'bold', color:'#8A2BE2' ,  fontSize:17}}>Таны хувийн туслах </Text>
       <Text style={{width:'80%', marginTop:30, color:'#8A2BE2', fontSize:16}}>Өдөр тутмын ажил, дадал зуршлаа үр дүнтэй зохион байгуулж, бүтээмж дадал зуршлаа сайжруул!</Text>
       
      </View>
      <View  style={css.twoFace}>
        {/* <ImageBackground style={{width:'100%', height:'100%'}} source={require('../../assets/image/download.jpg')}> */}

       
      <Image style={{width:'80%', height:'40%', resizeMode:"cover", marginTop:85}} source={require('../../assets/image/how-to-create-a-work-schedule-blog-insert-6-scheduling-software.png')}/>
      <Text style={{marginTop:30, fontWeight:'bold', color:'#8A2BE2',  fontSize:17}}>Өдөр тутмын горимыг бий болгох </Text>
      <Text style={{width:'80%', marginTop:20, color:'#8A2BE2', fontSize:16,  display:'flex', flexDirection:'column',  alignItems:'center' }}>Өдөр тутмынхаа горимыг нэмж, даалгавараа биелүүлж, ахиц дэвшлийг хянах. Эрүүл мэндийн дадал зуршилаа сайжруулж, муу зуршилаас салж  эсвэл шинээр бий болгох</Text>
      
      {/* </ImageBackground> */}
     </View>

    <View style={css.twoFace} >
        <Image style={{width:'80%', height:'40%', resizeMode:"cover", marginTop:85}} source={require('../../assets/image/how-to-create-a-work-schedule-blog-insert-4-manage-workers.png')}/>
        <Text style={{marginTop:30, fontWeight:'bold', color:'#8A2BE2', fontSize:17 }}>Өдрийг оновчтой зохион байгуулах</Text>
      <Text style={{width:'80%', fontSize:16,  marginTop:30, color:'#8A2BE2', display:'flex', flexDirection:'column', alignItems:'center' }}>Даалгавар, сануулагчийн жагсаалт үүсгэж өдөр тутмын бүтээмжээ нэмээрэй. Жишээ нь: ажлын даалгавар, хичээл, дасгал хөдөлгөөн,  гэрийн ажил, дэлгүүрээс авах зүйлс гэх мэт</Text>
        
        </View>
       <View style={css.twoFace}>
        <Image style={{ width: '80%', height: '40%', resizeMode: 'cover', marginTop:85 }}source={require('../../assets/image/how-to-create-a-work-schedule-blog-insert-2-work-schedule.png')}/>
        <Text style={{marginTop:30, fontSize:17,  fontWeight:'bold', color:'#8A2BE2'}}> Бүтээмжээ нэмэгдүүлэх  </Text>
      <Text style={{width:'80%', fontSize:16,  marginTop:30, color:'#8A2BE2', display:'flex', flexDirection:'column', alignItems:'center' }}> Даалгавараа удирдах өөр олон сонголтыг олоорой. Мөн зорилгоо тодорхойлох,  даалгаврын  стастикийг харах,  даалгавараа хуваалцах гэх мэт.</Text>
       </View>

    </Swiper>
    {showSignButton ? (
     <Button style={css.button} title='SignUp' onPress={()=>navigation.navigate("SignUp")}/>
     ) : (
      <Button style={css.button} title='Next' onPress={handlaNextSlide}/>
     )}

    
    
    </View>
    
  )
}
const css=StyleSheet.create({
    container:{
       flex:1
    },
    twoFace:{
      //  flex:1,
         display:'flex',
       flexDirection:'column',
       alignItems:'center',
       
       justifyContent:'center'
    },
    oneFaceText:{
        color:'white'
    },
    imageBackground:{
        flex: 1,
        width:"100%",
        height:"100%",
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    },
    text1:{
        color:'white',
        fontSize:32
    },
    button:{
      width:'80%',
      height:10,
      backgroundColor:'#8A2BE2'
    }

})
export default Home