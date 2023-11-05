import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PrpfileMaintain = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.prpfilemaintain}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <View style={[styles.bigframe, styles.frameLayout]}>
        <View style={[styles.frame, styles.frameLayout]}>
          <View style={[styles.updateworkaddr, styles.updateworkaddrShadowBox]}>
            <Text style={[styles.updateYourLoved, styles.updateTypo]}>
              Update your loved one picture
            </Text>
          </View>
          <View style={styles.updatehomeaddr}>
            <Text style={[styles.updateYourLoved, styles.updateTypo]}>
              Update your home address
            </Text>
          </View>
          <View
            style={[styles.updateworkaddr1, styles.updateworkaddrShadowBox]}
          >
            <Text style={[styles.updateYourLoved, styles.updateTypo]}>
              Update your work address
            </Text>
          </View>
          <Text style={[styles.hiEvan, styles.iconPosition1]}>Hi, Evan</Text>
          <LinearGradient
            style={[styles.frame1, styles.iconPosition1]}
            locations={[0, 1]}
            colors={["#e22030", "rgba(217, 217, 217, 0)"]}
          >
            <Text style={[styles.updateYourProfile, styles.updateTypo]}>
              Update your profile
            </Text>
          </LinearGradient>
          <Image
            style={[styles.profiePicIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/profie-pic2.png")}
          />
        </View>
      </View>
      <View style={[styles.back, styles.backBorder]}>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <Image
        style={[styles.logoIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={[styles.profileicon, styles.backBorder]}
        onPress={() => navigation.navigate("PrpfileMaintain")}
      >
        <Image
          style={[styles.profiePicIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/profie-pic1.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 307,
    overflow: "hidden",
  },
  updateworkaddrShadowBox: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_13xl,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorLightseagreen,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 30,
    shadowRadius: 30,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorRed,
    left: 39,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  updateTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  iconPosition1: {
    left: "50%",
    position: "absolute",
  },
  backBorder: {
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorCrimson,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  iconPosition: {
    zIndex: 0,
    left: "50%",
    position: "absolute",
  },
  updateYourLoved: {
    textAlign: "center",
  },
  updateworkaddr: {
    top: 490,
    width: 228,
  },
  updatehomeaddr: {
    top: 366,
    paddingHorizontal: Padding.p_11xl,
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Color.colorLightseagreen,
    borderStyle: "solid",
    elevation: 30,
    shadowRadius: 30,
    backgroundColor: Color.colorRed,
    left: 39,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  updateworkaddr1: {
    top: 427,
  },
  hiEvan: {
    marginTop: -298.5,
    marginLeft: -82.5,
    fontSize: 32,
    fontFamily: FontFamily.hammersmithOneRegular,
    color: Color.colorCrimson,
    display: "flex",
    width: 165,
    height: 61,
    top: "50%",
    left: "50%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  updateYourProfile: {
    width: 137,
    height: 25,
    textAlign: "center",
  },
  frame1: {
    marginLeft: -76.5,
    top: 634,
    borderRadius: Border.br_xl,
    shadowRadius: 4,
    elevation: 4,
    width: 152,
    height: 45,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: 9,
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  profiePicIcon: {
    marginTop: -218.2,
    marginLeft: -93.2,
    width: 186,
    height: 186,
    top: "50%",
    left: "50%",
  },
  frame: {
    backgroundColor: "rgba(255, 83, 73, 0.16)",
    height: 693,
  },
  bigframe: {
    top: 76,
    left: 42,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    width: 307,
  },
  vectorIcon: {
    marginLeft: -26.5,
    top: 18,
    width: 48,
    height: 28,
  },
  back: {
    top: -1,
    left: -7,
  },
  logoIcon: {
    marginLeft: -31,
    top: 1,
    width: 62,
    height: 64,
  },
  profiePicIcon1: {
    marginLeft: -31.2,
    top: 3,
    width: 59,
    height: 59,
  },
  profileicon: {
    top: -4,
    right: -7,
  },
  prpfilemaintain: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default PrpfileMaintain;
