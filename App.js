import {Link, Slot} from "expo-router";
import SignupScreen from "./screens/Authentication/Signup.jsx";
import LoginScreen from "./screens/Authentication/Login.jsx";
import HomeScreen from "./screens/Home/HomeScreen.jsx";
import Landing from "./screens/Landing/Landing.jsx";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} options={{headerShown : false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}}/>
                <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown : false}}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown : false}}/>
            </Stack.Navigator>
      </NavigationContainer>
    )
};


export default App;