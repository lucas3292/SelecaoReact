import * as React from 'react';
import { StyleSheet, Button, View, Text, TouchableOpacity, Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    
    <View style={styles.headContainer}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subTitle}>Escolha um dos módulos abaixo</Text>
        <TouchableOpacity  onPress={() => navigation.navigate('Maps')}>
            <View style = {styles.button}> 
                <Text style={styles.buttonTex} > MAPS</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('BarCode')}>
            <View style = {styles.button}> 
                <Text style={styles.buttonTex} > BARCODE</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('Detail')}>
            <View style = {styles.button}> 
                <Text style={styles.buttonTex} > CURRÍCULO</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        width: 350,
        height: 75,
        paddingVertical: 22,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71",
        marginBottom: 6,
    },
    buttonTex:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 19,
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: "400",
        color: "#322153"
    },
    subTitle:{
        fontSize: 14,
        fontWeight: "400",
        color: "#6c6c80",
        marginBottom: 20,
    },
    headContainer:{
        padding:20,
        paddingTop: Platform.OS === "android" ? 50:0,
    },
});
