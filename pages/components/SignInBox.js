import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const SignInBox = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame1.png")}
      />
      <LinearGradient
        style={[styles.signInButton, styles.registerPosition]}
        locations={[0, 1]}
        colors={["#e22030", "rgba(226, 32, 48, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.registerShadowBox]}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <Text style={styles.signIn}>Sign in</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.register, styles.registerShadowBox]}
        locations={[0, 1]}
        colors={["#00aeac", "rgba(0, 174, 172, 0)"]}
      >
        <Text style={styles.signIn}>Register</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  registerPosition: {
    width: 228,
    left: "50%",
    position: "absolute",
  },
  registerShadowBox: {
    backgroundColor: "transparent",
    paddingHorizontal: Padding.p_50xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    marginLeft: -114.5,
    overflow: "hidden",
  },
  frameIcon: {
    marginLeft: -118.5,
    top: 172,
    width: 237,
    height: 201,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  signIn: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.inriaSansBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  pressable: {
    marginTop: 166.5,
    shadowColor: "#ff5349",
    borderColor: Color.colorDimgray_100,
    width: "100%",
    paddingVertical: Padding.p_9xs,
  },
  signInButton: {
    top: "50%",
  },
  register: {
    top: 467,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorDarkslategray,
    paddingVertical: Padding.p_10xs,
    width: 228,
    left: "50%",
    position: "absolute",
  },
  frame: {
    alignSelf: "stretch",
    flex: 1,
    overflow: "hidden",
  },
});

export default SignInBox;
