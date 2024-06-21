import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const Event = () =>{
    return(
        <View>
            <MotiButton className="justify-start bg-black w-[90%] mx-auto p-8 mt-5">
                <Text className="text-white text-4xl font-thin font-sans tracking-widest px-7 pb-2">Campus Quest</Text>
            </MotiButton>
        </View>
    )
}

export default Event;