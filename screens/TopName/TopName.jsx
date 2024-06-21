import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const TopName = () =>{
    return(
        <View>
            <MotiButton className="justify-start bg-gray-950 pt-14">
                <Text className="text-white text-4xl font-thin font-sans tracking-widest px-7 pb-2">Campus Quest</Text>
            </MotiButton>
        </View>
    )
}

export default TopName;