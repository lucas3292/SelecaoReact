import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, Platform } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Linking.openURL(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subTitle}>Escaneie o QRCode</Text>
        <View style={styles.headContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && <View style={{marginTop:10}}>
            <Button  color={'#f01d71'} title={'Escaniar novamente'}  onPress={() => setScanned(false)} />
          </View>

          }
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:10,
        paddingTop: Platform.OS === "android" ? 50:0,
    },
    headContainer:{
      flex: 1,
      padding:10,
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
    optionButton:{
      borderRadius: 8,
      backgroundColor: "#f01d71",
    }
});
