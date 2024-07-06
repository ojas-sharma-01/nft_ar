import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TopName from '../TopName/TopName';
import Navbar from '../Navigation/Navbar';

const Layout = ({ navigation }) => {
    const [nearby, setNearby] = useState([
        { name: "SAMRTH MISHRA", rarity: "exotic", points: "1000", lat: "", lon: "" },
        { name: "ANMOL GAUR", rarity: "exotic", points: "1000", lat: "", lon: "" },
        { name: "ANIRUDH", rarity: "exotic", points: "1000", lat: "", lon: "" },
        { name: "ojas", rarity: "vcommon", points: "100", lat: "", lon: "" }
    ]);

    const clrmap = {
        exotic: "#d4af37",
        vcommon: "green",
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar barStyle="light-content" />
                <View>
                    <TopName />
                </View>
                <View style={{ alignItems: 'center', marginVertical: 24 }}>
                    <Text style={{ color: 'white', fontWeight: '800', fontSize: 40 }}>
                        Tokens around You -- !!
                    </Text>
                </View>
                <View style={{ marginHorizontal: '10%' }}>
                    {nearby.map((ele, index) => (
                        <View key={index} style={{ padding: 16, flexDirection: 'row', margin: 8, borderRadius: 4, backgroundColor: 'gray' }}>
                            <View style={{ height: 40, width: 40, borderRadius: 8, backgroundColor: clrmap[ele.rarity] }}></View>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={{ color: 'white' }}>{ele.name}</Text>
                                <Text style={{ color: 'white', fontWeight: '800' }}>{ele.points}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ flex: 1, marginTop: '10%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("camera")}>
                        <Text style={{ color: 'white' }}>OPEN CAMERA</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <Navbar />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default Layout;
