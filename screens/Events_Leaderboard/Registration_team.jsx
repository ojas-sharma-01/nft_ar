import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { motify } from 'moti';
import { styled } from 'nativewind';
import TopName from '../TopName/TopName';
import Navbar from '../Navigation/Navbar';

const StyledContainer = styled(View);
const StyledInputField = styled(TextInput);

const Container = motify(StyledContainer)();
const InputField = motify(StyledInputField)();


const Registration_team = ({navigation}) => {
  return (
    <View className='flex-1 bg-gray-950'>
      <TopName />
      <ScrollView className='flex-col gap-6 mt-3'>
        <View className='mb-5 mt-2'>
          <View className='flex-row justify-around pt-4 pb-4'>
            <TouchableOpacity onPress={() => { navigation.navigate("Registration_indiv") }}>
              <Text className='text-blue-400'>AS AN INDIVIDUAL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("Registration_team") }}>
              <Text className='text-blue-400'>AS A TEAM</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Container className="mx-3 flex-1 justify-center mt-[-16px] items-center gap-2">
          <InputField
            className='bg-gray-900 text-white p-4 mb-3 rounded-lg w-80'
            placeholder="Enter your team code"
            placeholderTextColor="#888888"
            keyboardType="default"
            autoCapitalize="words"
            autoCompleteType="tean_code"
            
          />

          <View className='flex-row justify-center'><Text className='text-white'>OR</Text></View>
          <InputField
            className='bg-gray-900 text-white p-4 mb-3 rounded-lg w-80'
            placeholder="Create Team Code"
            placeholderTextColor="#888888"
            keyboardType="default"
            autoCapitalize="words"
            autoCompleteType="team_code"
            
          />
          <InputField
            className='bg-gray-900 text-white p-4 mb-3 rounded-lg w-80'
            placeholder="No. of Participants"
            placeholderTextColor="#888888"
            keyboardType="default"
            autoCapitalize="words"
            autoCompleteType="participants"
            
          />

          <TouchableOpacity className='flex-row justify-center bg-blue-500 p-3 rounded-lg w-80 '>
            <Text className='text-md text-white'>
              JOIN
            </Text>
          </TouchableOpacity>
        </Container>
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  )
}

export default Registration_team