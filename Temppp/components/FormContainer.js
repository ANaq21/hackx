import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({ address, propMarginLeft }) => {
  const wCambellRdStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={styles.routebar}>
      <Image
        style={styles.routebarIcon}
        contentFit="cover"
        source={require("../assets/routebar1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.miles, styles.milesTypo]}>3 miles</Text>
      <Text style={[styles.wCambellRd, styles.milesTypo, wCambellRdStyle]}>
        {address}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  milesTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  routebarIcon: {
    borderRadius: Border.br_xl,
    width: 390,
    height: 63,
    zIndex: 0,
  },
  vectorIcon: {
    height: "85.45%",
    width: "9.49%",
    top: "5.45%",
    right: "84.62%",
    bottom: "9.09%",
    left: "5.9%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  miles: {
    top: 23,
    left: 46,
    fontSize: FontSize.size_sm,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    width: 55,
    height: 27,
    zIndex: 2,
  },
  wCambellRd: {
    marginLeft: -60,
    top: 18,
    left: "50%",
    fontSize: FontSize.size_xl,
    zIndex: 3,
  },
  routebar: {
    top: 68,
    left: 0,
    position: "absolute",
  },
});

export default FormContainer;
