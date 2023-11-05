import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignInBox from "../components/SignInBox";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const SignInPage = () => {
  return (
    <LinearGradient
      style={[styles.signInPage, styles.stayLogInBg]}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <SignInBox />
      <LinearGradient
        style={[styles.stayLogIn, styles.stayLogInBg]}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Text style={styles.stayLogIn1}>Stay log in</Text>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stayLogInBg: {
    backgroundColor: "transparent",
    alignItems: "center",
    overflow: "hidden",
  },
  stayLogIn1: {
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.inriaSansBold,
    color: Color.colorBlack,
    textAlign: "center",
  },
  stayLogIn: {
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 13,
    paddingVertical: 6,
    marginTop: 260,
  },
  signInPage: {
    flex: 1,
    width: "100%",
    height: 844,
    paddingLeft: 76,
    paddingTop: Padding.p_9xl,
    paddingRight: 77,
    paddingBottom: Padding.p_9xl,
  },
});

export default SignInPage;
