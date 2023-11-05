import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Padding, Border, FontSize } from "../GlobalStyles";

const StopSignDetectingPage = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.stopSignDetectingPage}
      locations={[0, 1]}
      colors={["rgba(255, 83, 73, 0)", "#00aeac"]}
    >
      <Image
        style={[styles.logoIcon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo2.png")}
      />
      <Image
        style={[styles.notificationIcon, styles.stopSignAheadPosition]}
        contentFit="cover"
        source={require("../assets/notification1.png")}
      />
      <FormContainer address="Coit rd" propMarginLeft={-29} />
      <Text
        style={[styles.stopSignAhead, styles.stopSignAheadTypo]}
      >{`Stop sign ahead
Please apply brakes`}</Text>
      <View style={styles.back}>
        <View style={[styles.directionarrow, styles.currentspeed1Border]} />
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={styles.stopsign}>
        <Image
          style={styles.stopsignChild}
          contentFit="cover"
          source={require("../assets/rectangle-8.png")}
        />
      </View>
      <View style={[styles.currentspeed, styles.triptimePosition]}>
        <View style={[styles.currentspeed1, styles.currentspeed1Border]}>
          <Text style={styles.stopSignAheadTypo}>
            <Text style={styles.speed}>{`Speed `}</Text>
            <Text style={styles.text}>40</Text>
            <Text style={styles.speed}> mph</Text>
          </Text>
        </View>
      </View>
      <View style={[styles.triptime, styles.triptimePosition]}>
        <View style={[styles.currentspeed1, styles.currentspeed1Border]}>
          <Text style={styles.stopSignAheadTypo}>
            <Text style={styles.timeDriving}>
              <Text style={styles.time}>Time</Text>
              <Text style={styles.text1}>{` `}</Text>
              <Text style={styles.time}>{`Driving `}</Text>
            </Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.speed}> hrs</Text>
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.profileicon, styles.logoIconPosition]}
        onPress={() => navigation.navigate("PrpfileMaintain")}
      >
        <View style={[styles.directionarrow, styles.currentspeed1Border]} />
        <Image
          style={[styles.profiePicIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/profie-pic.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoIconPosition: {
    top: 0,
    position: "absolute",
  },
  stopSignAheadPosition: {
    top: "50%",
    position: "absolute",
  },
  stopSignAheadTypo: {
    textAlign: "center",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  currentspeed1Border: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorCrimson,
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  triptimePosition: {
    bottom: -10,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  logoIcon: {
    marginLeft: -31,
    width: 63,
    height: 64,
    left: "50%",
  },
  notificationIcon: {
    marginTop: 54,
    left: 51,
    borderRadius: Border.br_xl,
    width: 287,
    height: 140,
  },
  stopSignAhead: {
    marginTop: 89,
    marginLeft: -86,
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    top: "50%",
    position: "absolute",
    left: "50%",
  },
  directionarrow: {
    borderColor: Color.colorBlack,
    width: 97,
    height: 67,
    zIndex: 0,
  },
  vectorIcon: {
    height: "43.08%",
    width: "50.53%",
    top: "27.69%",
    right: "26.32%",
    bottom: "29.23%",
    left: "23.16%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  back: {
    top: -1,
    left: 0,
    position: "absolute",
  },
  stopsignChild: {
    width: 300,
    height: 228,
  },
  stopsign: {
    top: 202,
    left: 35,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  speed: {
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  text: {
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
    overflow: "hidden",
  },
  currentspeed: {
    left: -9,
  },
  time: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorDimgray_200,
  },
  timeDriving: {
    fontSize: FontSize.size_mini,
  },
  triptime: {
    right: -12,
  },
  profiePicIcon: {
    top: 5,
    right: 20,
    width: 55,
    height: 55,
  },
  profileicon: {
    left: 297,
  },
  stopSignDetectingPage: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default StopSignDetectingPage;
