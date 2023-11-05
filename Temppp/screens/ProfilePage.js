import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.profilePage}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <Image
        style={styles.profiePicIcon}
        contentFit="cover"
        source={require("../assets/profie-pic3.png")}
      />
      <LinearGradient
        style={[styles.uploadPfp, styles.uploadPfpFlexBox]}
        locations={[0, 1]}
        colors={["#ff0202", "rgba(255, 2, 2, 0)"]}
      >
        <Text style={[styles.uploadYourProfile, styles.next1Typo]}>
          Upload your profile picture
        </Text>
      </LinearGradient>
      <LinearGradient
        style={[styles.skipbutton, styles.uploadPfpFlexBox]}
        locations={[0, 1]}
        colors={["#00aeac", "rgba(0, 174, 172, 0)"]}
      >
        <Text style={[styles.uploadYourProfile, styles.next1Typo]}>
          Skip for now
        </Text>
      </LinearGradient>
      <LinearGradient
        style={styles.next}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.uploadPfpFlexBox]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text style={[styles.next1, styles.next1Typo]}>Next</Text>
        </Pressable>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  uploadPfpFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  next1Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  profiePicIcon: {
    marginLeft: -92.7,
    top: 211,
    left: "50%",
    width: 186,
    height: 186,
    position: "absolute",
  },
  uploadYourProfile: {
    fontSize: FontSize.size_sm,
  },
  uploadPfp: {
    top: 442,
    shadowColor: "#ff5349",
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_9xs,
    height: 30,
    width: 228,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    left: 81,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    borderColor: Color.colorLightseagreen,
  },
  skipbutton: {
    top: 503,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorDarkslategray,
    paddingHorizontal: Padding.p_50xl,
    paddingVertical: Padding.p_10xs,
    height: 30,
    width: 228,
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    left: 81,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  next1: {
    fontSize: FontSize.size_xl,
  },
  pressable: {
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightseagreen,
    width: "100%",
  },
  next: {
    right: 2,
    bottom: 2,
    width: 83,
    height: 44,
    position: "absolute",
  },
  profilePage: {
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePage;
