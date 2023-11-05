import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Family = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[styles.family, styles.familyBg]}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <View style={[styles.updatefampic, styles.pressableFlexBox]}>
        <Text style={[styles.uploadYourLoved, styles.next1Typo]}>
          Upload your loved one picture
        </Text>
      </View>
      <View style={styles.frame}>
        <View style={[styles.familyPic, styles.familyPicShadowBox]}>
          <Image
            style={styles.familyPicChild}
            contentFit="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={styles.next}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableFlexBox]}
          onPress={() => navigation.navigate("PrpfileMaintain")}
        >
          <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        </Pressable>
      </LinearGradient>
      <LinearGradient
        style={[styles.skipbutton, styles.familyPicShadowBox]}
        locations={[0, 1]}
        colors={["#00aeac", "rgba(0, 174, 172, 0)"]}
      >
        <Text style={[styles.uploadYourLoved, styles.next1Typo]}>
          Skip for now
        </Text>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  familyBg: {
    backgroundColor: "transparent",
    width: "100%",
  },
  pressableFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  next1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  familyPicShadowBox: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    position: "absolute",
  },
  uploadYourLoved: {
    fontSize: FontSize.size_sm,
  },
  updatefampic: {
    top: 442,
    backgroundColor: "#ff5349",
    shadowColor: "#ff5349",
    borderColor: Color.colorDimgray_100,
    paddingHorizontal: 21,
    paddingVertical: Padding.p_9xs,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    left: 81,
    position: "absolute",
  },
  familyPicChild: {
    width: 184,
    zIndex: 0,
    height: 184,
  },
  vectorIcon: {
    height: "75.54%",
    width: "75%",
    top: "7.07%",
    right: "12.5%",
    bottom: "17.39%",
    left: "12.5%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  familyPic: {
    marginTop: -92,
    marginLeft: -81.5,
    top: "50%",
    left: "50%",
    shadowRadius: 4,
    elevation: 4,
  },
  frame: {
    top: 212,
    left: 82,
    width: 205,
    height: 184,
    position: "absolute",
    overflow: "hidden",
  },
  next1: {
    fontSize: FontSize.size_xl,
  },
  pressable: {
    borderColor: Color.colorLightseagreen,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "transparent",
    width: "100%",
  },
  next: {
    right: 0,
    bottom: 0,
    width: 83,
    height: 44,
    position: "absolute",
  },
  skipbutton: {
    top: 495,
    borderColor: Color.colorDarkslategray,
    width: 228,
    height: 30,
    paddingHorizontal: Padding.p_50xl,
    paddingVertical: Padding.p_10xs,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    elevation: 30,
    shadowRadius: 30,
    left: 81,
    backgroundColor: "transparent",
  },
  family: {
    flex: 1,
    height: 844,
    overflow: "hidden",
  },
});

export default Family;
