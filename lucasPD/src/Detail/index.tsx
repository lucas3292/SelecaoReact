import React from "react";
import { StyleSheet, Text, View, Image , ScrollView, Linking, Platform} from 'react-native';


export default function Detail(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
               
                <View style={styles.textContainer}>
                    <Text style={styles.optionText2}>Meu Currículo</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <ScrollView>
                <View style={{ flexDirection: "column", }}>
                    <Image  style={styles.optionImage} 
                    resizeMode='center' source={require('../../Assets/Curriculum1.jpg')}
                    />
                    <Image  style={styles.optionImage}
                    resizeMode='center' source={require('../../Assets/Curriculum2.jpg')}
                    />
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", }}>
                <Text style={styles.optionText} onPress={() =>{
                        Linking.openURL('https://api.whatsapp.com/send?phone=5592985144422');
                    }
                }>Link Whats</Text>
                <Image style={styles.optionImage2} source={require('../../Assets/Whats.png')}/>
            </View>
            <View style={{ flexDirection: "row", }}>
                <Text style={styles.optionText}  onPress={() =>{
                        Linking.openURL('mailto:ltn.lic17@uea.edu.br');
                    }
                }>Link Email</Text>
                <Image style={styles.optionImage2} source={require('../../Assets/Email.png')}/>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    optionImage:{
        width: 390,
        height: 400,
    },
    optionImage2:{
        marginLeft: 5,
        width: 39,
        height: 40,
    },
    header:{
        marginBottom:8
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'  
    },
    optionText:{
        fontSize: 26,
        marginHorizontal: "1%",
        color: 'blue',
    },
    optionText2:{
        fontSize: 26,
        marginHorizontal: "1%",
    },
    line : {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }

});