import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert, Pressable } from "react-native";
import { useFonts } from "expo-font";



function InputText(props) {

  const [loaded] = useFonts({
    MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  });




  return (
    <View>
        <TextInput
        style={styles.inputStyle}
        placeholder={props.entry}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles= StyleSheet.create({

    inputStyle: {

        backgroundColor: "rgba(214,245,241,1)",
        width: 250,
        height: 55,
        marginTop:20,  
        alignItems:"center",
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        fontFamily: "MontserratSemibold",
        fontSize: 18,
        alignItems: 'center',
        fontWeight: "bold",
    },
})

export default InputText