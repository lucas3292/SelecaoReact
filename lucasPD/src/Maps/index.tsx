import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View,PermissionsAndroid, SafeAreaView, Platform, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import { Options } from "./OptionsMap";
import * as Location from 'expo-location';

export default function Maps (){
    let[region,setRegion] = useState({
        latitude:-3.091379,
        longitude: -60.017278,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
    });
    // useEffect(() =>{
    //     navigator.geolocation.getCurrentPosition(
    //         posicao => {
    //             console.log(posicao);
    //     });
    // },[]
    // );
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [filter,setFilter] = useState("");
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        
        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
         
    return(
        <SafeAreaView style= {styles.container}>
            <View style={styles.headContainer}>
                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.subTitle}>Encontre no mapa a EST e veja sua posição atual</Text>
            </View>
        <MapView style = {styles.map} initialRegion={region} region={{
            latitude:filter === "myLocalization" ? location.coords.latitude:region.latitude,
            longitude:filter === "myLocalization" ? location.coords.longitude:region.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014
            }}>

            <Marker coordinate={{
                
                latitude: filter === "myLocalization" ? location.coords.latitude:region.latitude,
                longitude:filter === "myLocalization" ? location.coords.longitude:region.longitude,
                // latitude: location.coords.latitude,
                // longitude: location.coords.longitude,
            }}>
            </Marker>
        </MapView>

        <View style={styles.optionContainer}>
            <FlatList
            data={Options}
            horizontal
            showsHorizontalScrollIndicator = {false}
            ItemSeparatorComponent = {() => <View style = {{width: 10}} />}
            contentContainerStyle={{
                alignItems: 'center'
            }}
            renderItem={({ item}) =>(
                <TouchableOpacity onPress={() =>{
                    setFilter(item.key);
                    
                }}
                style={[styles.optionItem,
                        filter === item.key ? styles.optionSelectedItem: null]} key = {item.key} >
                   <Image style={styles.optionImage} source={item.image} />
                   <Text style = {styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    headContainer:{
        padding:20,
        paddingTop: Platform.OS === "android" ? 50:0,
    },
    title:{
        fontSize: 24,
        fontWeight: "400",
        color: "#322153"
    },
    subTitle:{
        fontSize: 14,
        fontWeight: "400",
        color: "#6c6c80"
    },
    map:{
        flex: 1,
        backgroundColor: "#fff"
    },
    optionContainer:{
        padding : 10
    },
    optionItem:{
        height: 110,
        backgroundColor: "#f0f0f5",
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    optionImage:{
        width: 50,
        height: 50,
    },
    optionText : {
        textAlign : "center",
        
    },
    optionSelectedItem:{
        height: 110,
        backgroundColor: "#6c6c80",
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});