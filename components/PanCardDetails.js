import { StatusBar } from "expo-status-bar";
import { StyleSheet,Image, Text, View, Pressable, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

import InputText from "./InputText";
import { TextInput, TouchableOpacity } from "react-native-web";

function PanCardDetails() {

  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });



  const panNumber = "Pan Number";
  const name = "Name";
  const dateofbirth = "Date Of Birth";

  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.mainheader}>CIBIL Details</Text>
      </View>

      <View style={styles.backbutton}>
        <TouchableOpacity>
        <Image
          style={styles.Vector}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/5e97m8ky82l-134%3A29?alt=media&token=62762659-a067-415d-8860-964965efad35",
          }}
        />
        </TouchableOpacity>
        
      </View>
      <View style={styles.Group590}>
        <View style={styles.feilds}>
          <InputText entry={panNumber} />
          <InputText entry={name} />
          <InputText entry={dateofbirth} />

          <Pressable
            style={styles.button}
            onPress={() => {
              Alert.alert("OTP sent");
            }}
          >
            <Text style={styles.text}>Get OTP</Text>
          </Pressable>
        </View>

        <View style={styles.OTPdesc}>
          <Text style={styles.Txt754}>
            By entering OTP you are perm- itting Mudrika Finance to fetch your
            credit score
          </Text>
        </View>

        <View style={styles.blank}>
          <TextInput
            style={styles.enter}
            placeholder=" _ _ _ _ _ _ "
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View style={styles.containermin}>
          <Text style={styles.timerStyle}> 00:14 secs</Text>

          <Pressable
            style={styles.resendbutton}
            onPress={() => {
              Alert.alert("OTP sent again!");
            }}
          >
            <Text style={styles.resendStyle}>Resend OTP</Text>
          </Pressable>
        </View>

        <View style={styles.confirm}>
          <Pressable
            style={styles.button}
            onPress={() => {
              Alert.alert("Proceed");
            }}
          >
            <Text style={styles.text}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    borderRadius: 10,
    backgroundColor: "rgba(40,101,94,1)",
    width: 428,
    height: 926,
  },

  mainheader: {
    position: "absolute",
    top: 50,
    left: 22,
    fontSize: 22,
    fontFamily: "Montserrat",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 349,
    height: 85,
  },


  backbutton:{
    position: "absolute",
    top: 25,
   left:20,
    // paddingTop: 59,
    // paddingBottom: 159,
    // paddingLeft: 101,
    // paddingRight: 130,
    // borderRadius: 131.5,
    backgroundColor: "rgba(40,101,94,1)",
    width: 100,
    height: 200,
  },

  Vector:{
    width: 33,
    height: 15,
  },

  Group590: {
    position: "absolute",
    top: 84,
    left: 44,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 300,
    height: 778,
  },

  feilds: {
    top: 40,
    alignItems: "center",
  },

  button: {
    position: "absolute",
    top: 245,
    // left: 33,
    backgroundColor: "rgba(40,101,94,1)",
    width: 250,
    height: 60,
  },

  text: {
    fontSize: 20,
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 250,
    height: 55,
    paddingHorizontal: 20,
    paddingVertical: 17,
  },

  OTPdesc: {
    top: 132,
    alignItems: "center",
  },

  Txt754: {
    fontSize: 16,
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    width: 250,
    marginBottom: 10,
  },

  blank: {
    top: 135,
    alignItems: "center",
  },

  enter: {
    fontSize: 18,
    backgroundColor: "rgba(214,245,241,1)",
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 250,
    height: 55,
    marginBottom: 7,
  },

  containermin: {
    top: 135,
    width: 250,
    marginLeft: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  timerStyle: {
    textAlign: "left",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginLeft: 4,
    // fontFamily: "Montserrat",
    fontWeight: "600",
  },

  resendStyle: {
    fontSize: 16,
    color: "rgba(0,0,0,1)",
    fontFamily: "Montserrat",
    fontWeight: "600",
    textDecorationLine: "underline",
  },

  confirm: {
    top: 50,
    alignItems: "center",
  },
});

export default PanCardDetails;
