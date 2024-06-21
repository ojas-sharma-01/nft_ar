import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView, motify } from 'moti';
import Navbar from "../Navigation/Navbar.jsx";
import TopName from "../TopName/TopName.jsx";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BackgroundImage2 from '../../assets/background/bullseye-gradient.png';


const Container = motify(View)();
const HeaderText = motify(Text)();
const InputField = motify(TextInput)();
const SignupButton = motify(TouchableOpacity)();
const ButtonText = motify(Text)();
const LogoImage = motify(Image)(); 

const HomeScreen = () =>{
    return (
        <SafeAreaProvider>
        <ScrollView contentContainerStyle={styles.container}>
        <ImageBackground
        className = "bg-slate-900"
        style={styles.backgroundImage}
        >
            <Container className="mb-auto mt-0">
                <TopName />
            </Container>

            <Container className="mt-auto mb-[-2px]">
                <Navbar />
            </Container>

            </ImageBackground>
        </ScrollView>
        </SafeAreaProvider>
        
        
    )
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexGrow : 1,
    justifyContent : "center",
    alignItems : "center",
  },
  backgroundImage: {
    flex : 1,
    resizeMode: 'cover',
    width : "100%",
    backgroundColor: "#030712",
  },
  logo: {
    width: 27,
    height: 27,
    marginHorizontal: 10,
    
  },
});

export default HomeScreen;