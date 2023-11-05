import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const BreakPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.breakPage}
      locations={[0, 1]}
      colors={["rgba(255, 83, 73, 0)", "#00aeac"]}
    >
      <Image
        style={styles.navebarIcon}
        contentFit="cover"
        source={require("../assets/navebar.png")}
      />
      <View style={[styles.directionarrow, styles.directionarrowLayout]} />
      <Image
        style={[styles.logoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/logo2.png")}
      />
      <Image
        style={[styles.warningmessageIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/warningmessage.png")}
      />
      <FormContainer address="W Cambell Rd" />
      <Text style={[styles.youveBeenDrivingContainer, styles.containerTypo]}>
        <Text
          style={styles.youveBeenDriving}
        >{`You’ve been driving for `}</Text>
        <Text>
          <Text style={styles.text}>3</Text>
          <Text style={styles.youveBeenDriving}> hrs</Text>
        </Text>
        <Text style={styles.youveBeenDriving}>Please take a break</Text>
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.frameIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.currentspeed, styles.triptimePosition]}>
        <View style={styles.currentspeed1}>
          <Text style={styles.containerTypo}>
            <Text style={styles.speed}>{`Speed `}</Text>
            <Text style={styles.text1}>40</Text>
            <Text style={styles.speed}> mph</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.triptime, styles.triptimePosition]}>
        <View style={styles.currentspeed1}>
          <Text style={styles.containerTypo}>
            <Text style={styles.timeDriving}>
              <Text style={styles.time}>Time</Text>
              <Text style={styles.text2}>{` `}</Text>
              <Text style={styles.time}>{`Driving `}</Text>
            </Text>
            <Text style={styles.text1}>3</Text>
            <Text style={styles.speed}> hrs</Text>
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.profileicon}
        onPress={() => navigation.navigate("PrpfileMaintain")}
      >
        <View style={[styles.profileiconChild, styles.directionarrowLayout]} />
        <Image
          style={styles.profiePicIcon}
          contentFit="cover"
          source={require("../assets/profie-pic4.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  directionarrowLayout: {
    height: 67,
    width: 97,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorCrimson,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  containerTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  vectorIconPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  triptimePosition: {
    padding: Padding.p_3xs,
    bottom: -9,
    position: "absolute",
  },
  navebarIcon: {
    left: 0,
    width: 390,
    height: 68,
    top: 0,
    position: "absolute",
  },
  directionarrow: {
    top: -2,
    left: -1,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  logoIcon: {
    marginLeft: -31,
    width: 63,
    height: 64,
    top: 0,
  },
  warningmessageIcon: {
    marginLeft: -143,
    top: 477,
    borderRadius: Border.br_xl,
    width: 285,
    height: 138,
  },
  youveBeenDriving: {
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  text: {
    fontSize: FontSize.size_5xl,
    color: Color.colorDarkslategray,
  },
  youveBeenDrivingContainer: {
    marginTop: 76,
    marginLeft: -102,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  vectorIcon: {
    marginTop: -405,
    marginLeft: -173,
    width: 48,
    height: 28,
  },
  frameIcon: {
    marginLeft: -93,
    top: 254,
    width: 186,
    height: 186,
    overflow: "hidden",
  },
  speed: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xl,
  },
  currentspeed1: {
    borderColor: Color.colorDimgray_100,
    width: 173,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorCrimson,
    overflow: "hidden",
  },
  currentspeed: {
    left: -11,
  },
  time: {
    color: Color.colorBlack,
  },
  text2: {
    color: Color.colorDimgray_200,
  },
  timeDriving: {
    fontSize: FontSize.size_mini,
  },
  triptime: {
    right: -10,
  },
  profileiconChild: {
    zIndex: 0,
  },
  profiePicIcon: {
    top: 5,
    right: 20,
    width: 55,
    height: 55,
    zIndex: 1,
    position: "absolute",
  },
  profileicon: {
    top: -1,
    left: 298,
    position: "absolute",
  },
  breakPage: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default BreakPage;
