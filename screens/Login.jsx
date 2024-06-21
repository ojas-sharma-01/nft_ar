import {React, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image, Pressable } from 'react-native';
import { ScrollView, motify } from 'moti';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

import BackgroundImage1 from '../assets/background/cornered-stairs.png';
import BackgroundImage2 from '../assets/background/bullseye-gradient.png';
import GoogleLogo from '../assets/background/gmail-logo.png';
import AppleLogo from '../assets/background/apple-logo.png';
import FacebookLogo from '../assets/background/facebook-logo.png';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Container = motify(View)();
const HeaderText = motify(Text)();
const InputField = motify(TextInput)();
const SignupButton = motify(TouchableOpacity)();
const ButtonText = motify(Text)();
const LogoImage = motify(Image)(); 

const LoginScreen = ({navigation}) => {
  const handleSignup = () => {
    console.log('Signup button pressed');
  };

  return (
    <SafeAreaProvider>
    <ScrollView contentContainerStyle = {styles.container}>
    <ImageBackground
      source={BackgroundImage2}
      style={styles.backgroundImage}
    >
      <Container className='flex-1 p-4  bg-transparent justify-around'>
        <Container className="my-auto flex h-[50%]">
          <Text className='text-white text-4xl font-extrabold my-auto text-center mx-10 mt-20 mb-20'>
            Welcome to Campus Quest
          </Text>
          <Text className='text-white text-xl font-thin my-auto text-center mx-10 mt-[-60px]'>
            Your next adventure and fun place
          </Text>
        </Container>

        <Container className=" mx-3 flex-1 justify-center mt-[-36px]">

          <InputField
            className='bg-gray-800 text-white p-4 mb-3 rounded-lg'
            placeholder="Enter your email"
            placeholderTextColor="#888888"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
          />

          <InputField
            className='bg-gray-800 text-white p-4 mb-3 rounded-lg'
            placeholder="Create a password"
            placeholderTextColor="#888888"
            secureTextEntry={true}
            autoCompleteType="password"
          />

          <SignupButton
            onPress={handleSignup}
            className='bg-blue-700 p-4 py-3 rounded-lg items-center'
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              type: 'spring',
              duration: 500,
            }}
          >
            <ButtonText className='text-white text-lg font-bold'>
              Login
            </ButtonText>
          </SignupButton>

          <Container className="flex-1 justify-center items-center mt-12">
            <Text className="text-white text-lg font-thin">Or login using</Text>
            <View className="flex-row justify-around mt-8">
                <LogoImage source={GoogleLogo} style={styles.logo} />
                <LogoImage source={AppleLogo} style={styles.logo} />
                <LogoImage source={FacebookLogo} style={styles.logo} />
            </View>
          </Container>
        </Container>

        

        <Container className="my-auto flex justify-around h-[30%] mt-5 mb-[-50]">
          <Text className='text-white text-xl font-thin my-auto text-center mx-10'>
            Not a user ? <Text className="text-blue-400" onPress={() => {navigation.navigate("Signup")}}>Signup</Text> 
          </Text>
        </Container>
      </Container>
    </ImageBackground>
    </ScrollView>
    </SafeAreaProvider>
  );
};

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
    width : "100%"
  },
  logo: {
    width: 27,
    height: 27,
    marginHorizontal: 10,
    
  },
});

export default LoginScreen;