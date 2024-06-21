import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const TopName = () =>{
    return(
        <View>
            <MotiButton className="justify-start bg-gray-950 pt-16">
                <Text className="text-white text-3xl font-thin font-sans tracking-widest px-8 pb-3">Campus Quest</Text>
            </MotiButton>
        </View>
    )
}

export default TopName;