import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const EventCard = () =>{
    return(
        <View>
            <View className="justify-start bg-black w-[90%] mx-auto p-8 mt-5 rounded-2xl">
                <Text className="text-white text-4xl font-thin font-sans tracking-widest px-7 pb-2">Events</Text>
            </View>
        </View>
    )
}

export default EventCard;