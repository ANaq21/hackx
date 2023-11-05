import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Setting = () => {
  return (
    <LinearGradient
      style={styles.setting}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <View style={[styles.updatehomeaddr, styles.nextFlexBox]}>
        <Text style={[styles.addYourHome, styles.next1Typo]}>
          Add your home address
        </Text>
      </View>
      <View style={[styles.updateworkaddr, styles.nextFlexBox]}>
        <Text style={[styles.addYourHome, styles.next1Typo]}>
          Add your work address
        </Text>
      </View>
      <LinearGradient
        style={[styles.next, styles.nextFlexBox]}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
      </LinearGradient>
      <Image
        style={styles.profiePicIcon}
        contentFit="cover"
        source={require("../assets/profie-pic2.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  nextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  next1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  addYourHome: {
    fontSize: FontSize.size_sm,
  },
  updatehomeaddr: {
    top: 442,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_9xs,
    borderColor: Color.colorLightseagreen,
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
    shadowColor: "#ff5349",
    backgroundColor: Color.colorRed,
    left: 81,
  },
  updateworkaddr: {
    top: 503,
    borderColor: Color.colorDimgray_100,
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_8xs,
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
    shadowColor: "#ff5349",
    backgroundColor: Color.colorRed,
    left: 81,
  },
  next1: {
    fontSize: FontSize.size_xl,
  },
  next: {
    right: 0,
    bottom: 0,
    width: 83,
    height: 44,
    borderColor: Color.colorLightseagreen,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "transparent",
  },
  profiePicIcon: {
    marginTop: -210.7,
    marginLeft: -92.7,
    top: "50%",
    left: "50%",
    width: 186,
    height: 186,
    position: "absolute",
  },
  setting: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Setting;
