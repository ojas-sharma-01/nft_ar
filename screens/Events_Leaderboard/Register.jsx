import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import TopName from '../TopName/TopName';
import Navbar from '../Navigation/Navbar';
import { MotiView } from 'moti';

const Register = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View className='flex-1 bg-gray-950'>
      <ScrollView className='bg-gray-950'>
        <TopName />
        <View className='flex-col gap-5 items-center mt-3 mb-6'>
          <MotiView
           from={{ scale: 0.9 }}
           animate={{ scale: 1 }}
           transition={{
             type: 'timing',
             duration: 600,
           }}>
          <Image
            className='w-80 h-80 rounded-xl'
            source={{ uri: data.image }}
          />
          </MotiView>

          <View className='flex-col justify-center gap-1'>
            <MotiView
              from={{ scale: 0.9 }}
              animate={{ scale: 1.2 }}
              transition={{
                type: 'timing',
                duration: 600,
              }}
            >
              <Text className='text-white text-2xl font-black text-center'>{data.name}</Text>
            </MotiView>

            <MotiView
              from={{ scale: 0.9 }}
              animate={{ scale: 1.2 }}
              transition={{
                type: 'timing',
                duration: 600,
              }}
            >
              <Text className='font-black text-2xl text-green-400 text-center'>{data.location}</Text>
            </MotiView>
          </View>

          <MotiView
          from={{ scale: 0.9 }}
          animate={{ scale: 1.2 }}
          transition={{
            type: 'timing',
            duration: 600,
          }}
          >
          <View className='flex-row justify-around w-1/2'>
            <View className='w-20 h-20 text-center bg-yellow-500 rounded-full'>
              <Text className='text-black text-center my-auto font-bold'>{data.gold_card_number}</Text>
            </View>

            <View className='w-20 h-20 text-center bg-gray-400 rounded-full'>
              <Text className='text-black text-center my-auto font-bold'>{data.silver_card_number}</Text>
            </View>

            <View className='w-20 h-20 text-center bg-yellow-700 rounded-full'>
              <Text className='text-black text-center my-auto font-bold'>{data.bronze_card_number}</Text>
            </View>
          </View>
          </MotiView>
        </View>

        <View className='flex-col gap-6 pr-4 pl-4'>
          <View className='flex-col gap-3'>
            <Text className='font-bold text-white'>No. Of Teams: 24</Text>
            <Text className='font-bold text-white'>No. Of Individual Participants: 40</Text>
          </View>

          <MotiView
            from={{ scale: 0.6 }}
            animate={{ scale: 1.0 }}
            transition={{
              type: 'timing',
              duration: 600,
            }}
          >
            <TouchableOpacity
              onPress={() => { navigation.navigate("Registration_indiv") }}
              className='flex-row pt-3 pb-3 rounded-lg justify-center bg-blue-600'
            >
              <Text className='text-white'>REGISTER NOW</Text>
            </TouchableOpacity>
          </MotiView>
        </View>
      </ScrollView>
      <Navbar navigation={navigation}/>
    </View>
  );
};

export default Register;
