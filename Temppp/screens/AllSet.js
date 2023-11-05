import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const AllSet = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.allSet}
      locations={[0, 1]}
      colors={["#00aeac", "rgba(255, 83, 73, 0)"]}
    >
      <Image
        style={[styles.logoIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={[styles.profileicon, styles.backBorder]}
        onPress={() => navigation.navigate("PrpfileMaintain")}
      >
        <Image
          style={[styles.profiePicIcon]}
          contentFit="cover"
          source={require("../assets/profie-pic11.png")}
        />
      </Pressable>
      <View style={[styles.back, styles.backBorder]}>
        <Image
          style={[styles.vectorIcon]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.startDriving, styles.fromaddressPosition]}>
        <Image
          style={styles.startDrivingChild}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <Text style={styles.startDriving1}>Start Driving</Text>
      </View>
      <View style={[styles.fromaddress, styles.fromaddressPosition]}>
        <Image
          style={styles.startDrivingChild}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <Text style={[styles.departure, styles.fromTypo]}>Home</Text>
        <Text style={[styles.from, styles.fromTypo]}>From:</Text>
      </View>
      <View style={[styles.toaddrress, styles.iconPosition]}>
        <Image
          style={styles.startDrivingChild}
          contentFit="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <Text style={[styles.departure, styles.fromTypo]}>Work</Text>
        <Text style={[styles.from, styles.fromTypo]}>To:</Text>
      </View>
      <View style={styles.yourcar}>
        <View style={styles.yourcarshownhere}>
          <Image
            style={styles.yourcarshownhereChild}
            contentFit="cover"
            source={require("../assets/rectangle-4.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={styles.next}
        locations={[0, 1]}
        colors={["#ff5349", "rgba(255, 83, 73, 0)"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text style={styles.next1}>Next</Text>
        </Pressable>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  backBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorCrimson,
    top: -1,
    position: "absolute",
  },
  fromaddressPosition: {
    marginLeft: -127,
    left: "50%",
    position: "absolute",
  },
  fromTypo: {
    width: 67,
    top: 5,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  logoIcon: {
    marginLeft: -33,
    top: 1,
    width: 62,
    height: 64,
  },
  profiePicIcon: {
    marginLeft: -31.2,
    top: 3,
    width: 59,
    height: 59,
    zIndex: 0,
  },
  profileicon: {
    left: 292,
  },
  vectorIcon: {
    marginLeft: -26.5,
    top: 18,
    width: 48,
    height: 28,
    zIndex: 0,
  },
  back: {
    left: -3,
  },
  startDrivingChild: {
    borderRadius: Border.br_xl,
    height: 36,
    width: 254,
    zIndex: 0,
  },
  startDriving1: {
    top: 6,
    left: 38,
    width: 180,
    zIndex: 1,
    height: 23,
    display: "flex",
    fontSize: FontSize.size_sm,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  startDriving: {
    top: 439,
  },
  departure: {
    left: 112,
    zIndex: 1,
  },
  from: {
    left: 45,
    zIndex: 2,
  },
  fromaddress: {
    top: 484,
  },
  toaddrress: {
    marginLeft: -126,
    top: 536,
  },
  yourcarshownhereChild: {
    height: 188,
    width: 254,
  },
  yourcarshownhere: {
    padding: Padding.p_3xs,
  },
  yourcar: {
    marginTop: -245,
    top: "50%",
    left: 48,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  next1: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  pressable: {
    borderColor: Color.colorLightseagreen,
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
  next: {
    right: 1,
    bottom: 2,
    width: 83,
    height: 44,
    position: "absolute",
  },
  allSet: {
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default AllSet;
