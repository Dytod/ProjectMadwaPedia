import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PopularMobileCard = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.component3, styles.component3Layout]}
      onPress={() => navigation.navigate("Home14")}
    >
      <Image
        style={styles.component3Child}
        contentFit="cover"
        source={require("../assets/rectangle-31.png")}
      />
      <View style={styles.component3Item} />
      <View style={[styles.component3Inner, styles.frameViewPosition]} />
      <View style={[styles.frameView, styles.frameViewPosition]} />
      <Image
        style={[styles.vectorIcon, styles.component3Layout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={styles.mobileLegends}>{`Mobile
Legends`}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  component3Layout: {
    width: 99,
    position: "absolute",
  },
  frameViewPosition: {
    backgroundColor: Color.colorMediumseagreen_100,
    top: "53.55%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  component3Child: {
    height: "63.87%",
    top: "0%",
    bottom: "36.13%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  component3Item: {
    height: "0.65%",
    width: "101.01%",
    right: "-0.51%",
    bottom: "45.81%",
    left: "-0.51%",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    top: "53.55%",
    position: "absolute",
  },
  component3Inner: {
    height: "46.45%",
    bottom: "0%",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorMediumseagreen_100,
  },
  frameView: {
    height: "32.9%",
    bottom: "13.55%",
  },
  vectorIcon: {
    top: 71,
    left: 0,
    height: 28,
  },
  mobileLegends: {
    top: 99,
    left: 23,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.android13BodyMediumSemibold,
    color: Color.lightColor,
    textAlign: "center",
    position: "absolute",
  },
  component3: {
    top: 155,
    left: 8,
    height: 155,
  },
});

export default PopularMobileCard;
