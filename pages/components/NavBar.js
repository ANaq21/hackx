import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const NavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.frame, styles.frameFlexBox]}>
      <View style={styles.backBorder}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.frame1, styles.frameFlexBox]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo1.png")}
        />
        <Pressable
          style={[styles.back1, styles.backBorder]}
          onPress={() => navigation.navigate("AllSet")}
        >
          <Text style={styles.newTrip}>New Trip</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
  },
  backBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorCrimson,
  },
  vectorIcon: {
    marginLeft: -26.5,
    top: 18,
    left: "50%",
    width: 48,
    height: 28,
    zIndex: 0,
    position: "absolute",
  },
  logoIcon: {
    width: 62,
    height: 64,
  },
  newTrip: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.inriaSansBold,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    width: 98,
    height: 62,
    alignItems: "center",
  },
  back1: {
    marginLeft: 66,
  },
  frame1: {
    width: 226,
    marginLeft: 69,
    height: 64,
    alignItems: "center",
  },
  frame: {
    top: -1,
    left: 0,
    width: 390,
    height: 65,
    alignItems: "center",
    position: "absolute",
  },
});

export default NavBar;
