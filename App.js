import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './src/page/Signin';
import Signup from './src/page/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/page/Home';
import OneFace from './src/page/OneFace'; // Check the file path
import CalendarComponent from './src/component/Calendar';
const  Stack =createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="OneFace" component={OneFace}/>
        <Stack.Screen name="SignUp" component={Signup}/>
        <Stack.Screen name="SignIn" component={Signin}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="CalendarComponent" component={CalendarComponent} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
