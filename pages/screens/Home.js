import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.home}
      locations={[0, 1]}
      colors={["rgba(255, 83, 73, 0)", "#00aeac"]}
    >
      <Image
        style={styles.navebarIcon}
        contentFit="cover"
        source={require("../assets/navebar.png")}
      />
      <Image
        style={[styles.logoIcon, styles.yourcarPosition]}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={[styles.profileicon, styles.backPosition]}
        onPress={() => navigation.navigate("PrpfileMaintain")}
      >
        <View style={[styles.profileiconChild, styles.warningmessageBorder]} />
        <Image
          style={styles.profiePicIcon}
          contentFit="cover"
          source={require("../assets/profie-pic.png")}
        />
      </Pressable>
      <View style={[styles.routebar, styles.yourcarPosition]}>
        <Image
          style={styles.routebarIcon}
          contentFit="cover"
          source={require("../assets/routebar.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.miles, styles.milesFlexBox]}>3 miles</Text>
        <Text style={[styles.franklinDr, styles.milesFlexBox]}>
          Franklin dr.
        </Text>
      </View>
      <View style={[styles.warningmessage, styles.warningmessageBorder]}>
        <Image
          style={styles.notificationIcon}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
        <Text style={styles.driveCautiously}>Drive cautiously</Text>
      </View>
      <LinearGradient
        style={[styles.currentspeed, styles.triptimeFlexBox]}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(226, 32, 48, 0)"]}
      >
        <Text style={styles.speed40MphContainer}>
          <Text style={styles.speed}>{`Speed `}</Text>
          <Text style={styles.text}>40</Text>
          <Text style={styles.speed}> mph</Text>
        </Text>
      </LinearGradient>
      <LinearGradient
        style={[styles.triptime, styles.triptimeFlexBox]}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(226, 32, 48, 0)"]}
      >
        <Text style={styles.speed40MphContainer}>
          <Text style={styles.timeDriving}>
            <Text style={styles.time}>Time</Text>
            <Text style={styles.text1}>{` `}</Text>
            <Text style={styles.time}>{`Driving `}</Text>
          </Text>
          <Text style={styles.text}>10</Text>
          <Text style={styles.speed}> mins</Text>
        </Text>
      </LinearGradient>
      <View style={[styles.back, styles.backPosition]}>
        <View style={[styles.profileiconChild, styles.warningmessageBorder]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.yourcar, styles.yourcarPosition]}>
        <View style={styles.yourcarshownhere}>
          <Image
            style={styles.yourcarshownhereChild}
            contentFit="cover"
            source={require("../assets/rectangle-4.png")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  yourcarPosition: {
    left: "50%",
    position: "absolute",
  },
  backPosition: {
    top: -1,
    position: "absolute",
  },
  warningmessageBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  milesFlexBox: {
    height: 27,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  triptimeFlexBox: {
    flexDirection: "row",
    height: 45,
    width: 173,
    borderColor: Color.colorDimgray_100,
    bottom: -1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  navebarIcon: {
    height: 68,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  logoIcon: {
    marginLeft: -31,
    width: 62,
    height: 64,
    top: 0,
  },
  profileiconChild: {
    backgroundColor: Color.colorCrimson,
    borderColor: Color.colorBlack,
    width: 97,
    height: 67,
    zIndex: 0,
  },
  profiePicIcon: {
    top: 5,
    right: 20,
    height: 55,
    zIndex: 1,
    width: 55,
    position: "absolute",
  },
  profileicon: {
    left: 295,
  },
  routebarIcon: {
    height: 65,
    borderRadius: Border.br_xl,
    zIndex: 0,
    width: 390,
  },
  vectorIcon: {
    height: "85.45%",
    width: "9.49%",
    top: "5.45%",
    right: "84.62%",
    bottom: "9.09%",
    left: "5.9%",
  },
  miles: {
    top: 23,
    left: 46,
    fontSize: FontSize.size_sm,
    zIndex: 2,
    width: 55,
    height: 27,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
  },
  franklinDr: {
    top: 15,
    left: 174,
    width: 136,
    zIndex: 3,
    fontSize: FontSize.size_xl,
  },
  routebar: {
    marginLeft: -195,
    top: 68,
  },
  notificationIcon: {
    width: 285,
    height: 138,
    borderRadius: Border.br_xl,
    zIndex: 0,
  },
  driveCautiously: {
    top: 8,
    left: 1,
    width: 225,
    height: 61,
    alignItems: "center",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    zIndex: 1,
    position: "absolute",
  },
  warningmessage: {
    marginTop: 74,
    top: "50%",
    left: 81,
    borderColor: Color.colorLightseagreen,
    borderRadius: Border.br_xl,
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
  speed40MphContainer: {
    textAlign: "center",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  currentspeed: {
    left: -1,
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
    right: -1,
  },
  vectorIcon1: {
    height: "43.08%",
    width: "50.53%",
    top: "27.69%",
    right: "26.32%",
    bottom: "29.23%",
    left: "23.16%",
  },
  back: {
    left: 0,
  },
  yourcarshownhereChild: {
    width: 254,
    height: 188,
  },
  yourcarshownhere: {
    padding: Padding.p_3xs,
  },
  yourcar: {
    marginLeft: -147,
    top: 189,
    padding: Padding.p_3xs,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default Home;
