import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView, motify } from 'moti';
import Navbar from "../Navigation/Navbar.jsx";
import TopName from "../TopName/TopName.jsx";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BackgroundImage2 from '../../assets/background/bullseye-gradient.png';
import Event from './Events/Event.jsx';

const Container = motify(View)();
const HeaderText = motify(Text)();
const InputField = motify(TextInput)();
const SignupButton = motify(TouchableOpacity)();
const ButtonText = motify(Text)();
const LogoImage = motify(Image)(); 

const HomeScreen = () =>{
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    className= "bg-gray-950"
                    style={styles.backgroundImage}
                >
                    <View>
                        <TopName />
                    </View>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        
                        
                        <View style={styles.eventsContainer}>
                            <Event />
                        </View>


                    </ScrollView>
                    <View>
                        <Navbar />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    )
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
        backgroundColor: "#030712",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 4, 
    },
});

export default HomeScreen;
