import {Link, Slot} from "expo-router";
import SignupScreen from "./screens/Signup.jsx";
import LoginScreen from "./screens/Login.jsx";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}}/>
                <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown : false}}/>
            </Stack.Navigator>
      </NavigationContainer>
    )
};


export default App;