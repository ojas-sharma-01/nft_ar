import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import TopName from '../TopName/TopName';
import Navbar from '../Navigation/Navbar';
import React from 'react';
import { SafeAreaView } from 'moti';
import Header_Section from './Header_Section';
import { MotiView } from 'moti';
const data = [
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },
  {
    "name": "Event 1",
    "image": "https://delhitourism.travel/images/places-to-visit/headers/connaught-place-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    "gold_card_number": 1001,
    "silver_card_number": 2001,
    "bronze_card_number": 3001,
    "location": "NSP"
  },

];

const click_handle = (navigation, item) => {
  navigation.navigate("Register", { data: item });
}

const Event_section = ({ navigation }) => {
  return (
    <View className='bg-gray-950 flex-1'>
      <TopName />
      <ScrollView>
        <Header_Section navigation={navigation}></Header_Section>
        <View className='flex-col mt-4 gap-9 pl-4 pr-4'>
          {data.map((item, index) => (
            <MotiView
            from={{ scale: 0.9 }}
           animate={{ scale: 1 }}
           transition={{
             type: 'timing',
             duration: 600,
           }}
            >
              <TouchableOpacity onPress={() => click_handle(navigation, item)} className='bg-gray-900 rounded-lg shadow-lg overflow-hidden' key={index}>
              <View className='flex-row p-4'>
                <Image className='w-28 h-20 rounded-md' source={{ uri: item.image }} />
                <View className='flex-1 pl-4'>
                  <Text className='text-white text-lg font-bold'>{item.name}</Text>
                  <Text className='text-green-300 text-sm'>{item.location}</Text>
                  <View className='flex-row justify-start mt-2'>
                    <View className='flex-col items-center mx-2'>
                      <Text className='text-yellow-500 text-base'>Gold</Text>
                      <Text className='text-white'>{item.gold_card_number}</Text>
                    </View>
                    <View className='flex-col items-center mx-2'>
                      <Text className='text-gray-400 text-base'>Silver</Text>
                      <Text className='text-white'>{item.silver_card_number}</Text>
                    </View>
                    <View className='flex-col items-center mx-2'>
                      <Text className='text-yellow-800 text-base'>Bronze</Text>
                      <Text className='text-white'>{item.bronze_card_number}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            </MotiView>
          ))}
        </View>
      </ScrollView>
      <Navbar navigation={navigation}/>
    </View>
  );
};

export default Event_section;







