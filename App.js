import {Link, Slot} from "expo-router";
import SignupScreen from "./screens/Authentication/Signup.jsx";
import LoginScreen from "./screens/Authentication/Login.jsx";
import HomeScreen from "./screens/Home/HomeScreen.jsx";
import Landing from "./screens/Landing/Landing.jsx";
import ProfileScreen from "./screens/Profile/ProfileScreen.jsx";
import HamburgerScreen from "./screens/Hamburger/HamburgerScreen.jsx";
import NotificationScreen from "./screens/Notifications/NotificationScreen.jsx";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TradeScreen from "./screens/Trade/TradeScreen.js";
import YourTradeScreen from './screens/Trade/Your/YourTradeScreen.js';
import GlobalTradeScreen from './screens/Trade/Global/GlobalTradeScreen';
const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events_Section from './screens/Events_Leaderboard/Events_Section.jsx';
import Leaderboard from "./screens/Events_Leaderboard/LeaderBoard.jsx";
import Register from "./screens/Events_Leaderboard/Register.jsx";
import Registration_indiv from "./screens/Events_Leaderboard/Registration_indiv.jsx";
import Registration_team from "./screens/Events_Leaderboard/Registration_team.jsx";

const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Landing" component={Landing} options={{headerShown : false}}/>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown : false}}/>
                <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown : false}}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown : false}}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown : false}}/>
                <Stack.Screen name="HamburgerScreen" component={HamburgerScreen} options={{headerShown : false}}/>
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} options={{headerShown : false}}/>
                <Stack.Screen name="Trade" component={TradeScreen} options={{headerShown : false}}/>
                <Stack.Screen name="YourTrade" component={YourTradeScreen} />
                <Stack.Screen name="GlobalTrade" component={GlobalTradeScreen} />
                <Stack.Screen name="Events_Section" component={Events_Section} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="LeaderBoard" component={Leaderboard} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="Register" component={Register} options={{headerShown : false}}/>
                <Stack.Screen name="Registration_indiv" component={Registration_indiv} options={{headerShown : false}}></Stack.Screen>
                <Stack.Screen name="Registration_team" component={Registration_team} options={{headerShown : false}}></Stack.Screen>
            </Stack.Navigator>
      </NavigationContainer>
    )
};


export default App;
