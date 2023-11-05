import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import NavBar from "../components/NavBar";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PrpfileMaintain = () => {
  return (
    <LinearGradient
      style={styles.prpfilemaintain}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <NavBar />
      <View style={styles.frame}>
        <View style={styles.frame1}>
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
          <View style={[styles.profilepictureWrapper, styles.hiEvanPosition]}>
            <View style={styles.profilepicture}>
              <Image
                style={styles.profilepictureChild}
                contentFit="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <Image
                style={[styles.svg3171Icon, styles.hiEvanLayout]}
                contentFit="cover"
                source={require("../assets/svg3171.png")}
              />
            </View>
          </View>
          <Text style={[styles.hiEvan, styles.hiEvanLayout]}>Hi, Evan</Text>
          <LinearGradient
            style={styles.frame2}
            locations={[0, 1]}
            colors={["#e22030", "rgba(217, 217, 217, 0)"]}
          >
            <Text style={[styles.updateYourProfile, styles.updateTypo]}>
              Update your profile
            </Text>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
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
  hiEvanPosition: {
    top: "50%",
    left: "50%",
  },
  hiEvanLayout: {
    width: 165,
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
  profilepictureChild: {
    width: 246,
    height: 246,
    zIndex: 0,
  },
  svg3171Icon: {
    top: 0,
    left: 10,
    height: 165,
    zIndex: 1,
    overflow: "hidden",
  },
  profilepicture: {
    flexDirection: "row",
  },
  profilepictureWrapper: {
    marginTop: -210.5,
    marginLeft: -102.5,
    padding: Padding.p_3xs,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  hiEvan: {
    marginTop: -298.5,
    marginLeft: -82.5,
    fontSize: 32,
    fontFamily: FontFamily.hammersmithOneRegular,
    color: Color.colorCrimson,
    display: "flex",
    height: 61,
    left: "50%",
    top: "50%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  updateYourProfile: {
    width: 137,
    height: 25,
    textAlign: "center",
  },
  frame2: {
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
    left: "50%",
    alignItems: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  frame1: {
    backgroundColor: "rgba(255, 83, 73, 0.16)",
    width: 307,
    height: 693,
    overflow: "hidden",
  },
  frame: {
    top: 76,
    left: 0,
    width: 349,
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
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
