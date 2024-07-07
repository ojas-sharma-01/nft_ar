import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'

const Header_Section = ({navigation}) => {
  return (
    <View className='mb-5 mt-2'>
    <View className='flex-row justify-around pt-4 pb-4'>
      <TouchableOpacity onPress={() => { navigation.navigate("Events_Section") }}>
        <Text className='text-blue-400'>EVENTS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("LeaderBoard") }}>
        <Text className='text-blue-400'>LEADERBOARD</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Header_Section