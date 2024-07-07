import { View, Text, ScrollView , TouchableOpacity} from 'react-native';
import React from 'react';
import TopName from '../TopName/TopName';
import Header_Section from './Header_Section';
import Navbar from '../Navigation/Navbar';

const data = [
  {
    username: "John Doe",
    points: 1000,
    rank: 1,
  },
  {
    username: "Jane Smith",
    points: 850,
    rank: 2,
  },
  {
    username: "Michael Johnson",
    points: 800,
    rank: 3,
  },
  {
    username: "Emily Davis",
    points: 780,
    rank: 4,
  },
  {
    username: "Daniel Wilson",
    points: 750,
    rank: 5,
  },
  {
    username: "Sarah Brown",
    points: 720,
    rank: 6,
  },
  {
    username: "Robert Miller",
    points: 700,
    rank: 7,
  },
  {
    username: "Linda Garcia",
    points: 680,
    rank: 8,
  },
  {
    username: "William Martinez",
    points: 650,
    rank: 9,
  },
  {
    username: "Karen Robinson",
    points: 620,
    rank: 10,
  },
  {
    username: "Mark Clark",
    points: 600,
    rank: 11,
  },
  {
    username: "Maria Hernandez",
    points: 580,
    rank: 12,
  },
  {
    username: "James Young",
    points: 550,
    rank: 13,
  },
];

const LeaderBoard = ({navigation}) => {
  const getBackgroundColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-500';
      case 2:
        return 'bg-gray-400';
      case 3:
        return 'bg-yellow-800';
      default:
        return 'bg-gray-900';
    }
  };

  return (
    <View className='flex-1 bg-gray-950'>
      <TopName />
      <ScrollView className='bg-gray-950'>
        
        <Header_Section navigation={navigation}></Header_Section>
        <View className='flex-col gap-3'>
          <View className='flex-row justify-center mt-3'>
            <Text className='text-xl text-blue-400 font-sans'>LEADERBOARD</Text>
          </View>
          <View className='flex-row justify-start'>
            <Text className='text-white text-lg pl-4'>WEEKLY</Text>
          </View>
          <View className='flex-col gap-5 items-center'>
            {data.map((item, index) => (
              <View
                className={`flex-row justify-around pt-5 pb-5 w-80 rounded-lg ${getBackgroundColor(item.rank)}`}
                key={index}
              >
                <Text className='text-white flex-row justify-center'>{item.rank}</Text>
                <Text className='text-white'>{item.username}</Text>
                <Text className='text-white'>{item.points}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Navbar navigation={navigation}></Navbar>
    </View>
  );
}

export default LeaderBoard;
