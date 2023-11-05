import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const SpeedingPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.speedingPage}
      locations={[0, 1]}
      colors={["rgba(255, 83, 73, 0)", "#00aeac"]}
    >
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <View style={[styles.routebar, styles.logoIconPosition]}>
        <Image
          style={[styles.routebarIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/routebar.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.miles, styles.milesLayout]}>3 miles</Text>
        <Text style={[styles.i95, styles.i95Position]}>I-95</Text>
      </View>
      <View style={[styles.warningmessage, styles.i95Position]}>
        <Image
          style={[styles.notificationIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
        <Text style={[styles.youAreSpeedingContainer, styles.i95Position]}>
          <Text style={styles.youAre}>
            <Text style={styles.youAre1}>You are</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.speedingPleaseSlowDown}>
            <Text style={styles.speeding}>{`speeding
`}</Text>
            <Text style={styles.youAre1}>Please slow down</Text>
          </Text>
        </Text>
      </View>
      <LinearGradient
        style={[styles.currentspeed, styles.triptimeFlexBox]}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Text style={styles.containerTypo}>
          <Text style={styles.speed}>{`Speed `}</Text>
          <Text style={styles.text1}>90</Text>
          <Text style={styles.speed}> mph</Text>
        </Text>
      </LinearGradient>
      <LinearGradient
        style={[styles.triptime, styles.triptimeFlexBox]}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Text style={styles.containerTypo}>
          <Text style={styles.timeDriving}>
            <Text style={styles.youAre1}>Time</Text>
            <Text style={styles.text2}>{` `}</Text>
            <Text style={styles.youAre1}>{`Driving `}</Text>
          </Text>
          <Text style={styles.text1}>1</Text>
          <Text style={styles.speed}> hrs</Text>
        </Text>
      </LinearGradient>
      <View style={[styles.back, styles.backPosition]}>
        <View style={styles.directionarrow} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.petpicWrapper, styles.petpicSpaceBlock]}>
        <View style={[styles.petpic, styles.petpicSpaceBlock]}>
          <Image
            style={styles.petpicIcon}
            contentFit="cover"
            source={require("../assets/petpic.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.profileicon, styles.backPosition]}
        onPress={() => navigation.navigate("PrpfileMaintain")}
      >
        <View style={styles.directionarrow} />
        <Image
          style={[styles.profiePicIcon, styles.milesLayout]}
          contentFit="cover"
          source={require("../assets/profie-pic.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoIconPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    zIndex: 0,
    borderRadius: Border.br_xl,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  milesLayout: {
    width: 55,
    position: "absolute",
  },
  i95Position: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  triptimeFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    height: 45,
    width: 173,
    borderColor: Color.colorDimgray_100,
    bottom: -1,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  backPosition: {
    top: -1,
    position: "absolute",
  },
  petpicSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  logoIcon: {
    marginLeft: -31,
    top: 0,
    width: 62,
    height: 64,
  },
  routebarIcon: {
    width: 390,
    height: 65,
  },
  vectorIcon: {
    height: "85.45%",
    width: "9.49%",
    top: "5.45%",
    right: "84.62%",
    bottom: "9.09%",
    left: "5.9%",
    zIndex: 1,
  },
  miles: {
    top: 23,
    left: 46,
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "flex-end",
    height: 27,
    zIndex: 2,
    justifyContent: "center",
    width: 55,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  i95: {
    marginTop: -11.5,
    marginLeft: 0,
    zIndex: 3,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    color: Color.colorBlack,
  },
  routebar: {
    marginLeft: -195,
    top: 68,
  },
  notificationIcon: {
    width: 285,
    height: 138,
  },
  youAre1: {
    color: Color.colorBlack,
  },
  text: {
    color: Color.colorCrimson,
  },
  youAre: {
    fontSize: FontSize.size_xl,
  },
  speeding: {
    color: Color.colorDarkslategray,
  },
  speedingPleaseSlowDown: {
    fontSize: FontSize.size_5xl,
  },
  youAreSpeedingContainer: {
    marginTop: -30,
    marginLeft: -92.5,
    textAlign: "center",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    zIndex: 1,
  },
  warningmessage: {
    marginTop: 75,
    marginLeft: -113,
  },
  speed: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xl,
  },
  containerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  currentspeed: {
    left: -1,
  },
  text2: {
    color: Color.colorDimgray_200,
  },
  timeDriving: {
    fontSize: FontSize.size_mini,
  },
  triptime: {
    right: -1,
  },
  directionarrow: {
    backgroundColor: Color.colorCrimson,
    borderColor: Color.colorBlack,
    width: 97,
    height: 67,
    borderWidth: 1,
    borderStyle: "solid",
    zIndex: 0,
  },
  vectorIcon1: {
    height: "43.08%",
    width: "50.53%",
    top: "27.69%",
    right: "26.32%",
    bottom: "29.23%",
    left: "23.16%",
    zIndex: 1,
  },
  back: {
    left: 0,
  },
  petpicIcon: {
    width: 291,
    height: 291,
  },
  petpic: {
    width: 241,
    height: 241,
  },
  petpicWrapper: {
    top: 198,
    left: 65,
    position: "absolute",
    padding: Padding.p_3xs,
  },
  profiePicIcon: {
    top: 5,
    right: 20,
    height: 55,
    zIndex: 1,
  },
  profileicon: {
    left: 295,
  },
  speedingPage: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default SpeedingPage;
