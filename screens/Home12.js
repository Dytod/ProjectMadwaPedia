import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Component3 from "../components/Component3";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home12 = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.home} onPress={() => navigation.navigate("Home9")}>
      <View style={[styles.homeChild, styles.homePosition]} />
      <View style={[styles.homeChild, styles.homePosition]} />
      <Component3
        systemUiconssideMenu={require("../assets/systemuiconssidemenu1.png")}
        content={require("../assets/content.png")}
        systemUiconssideMenu1={require("../assets/systemuiconssidemenu1.png")}
        component3Position="absolute"
        component3Top={0}
        component3Left={0}
      />
      <View style={[styles.homeInner, styles.homePosition]} />
      <Image
        style={[styles.rectangleIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={[styles.mobileLegends, styles.mobileLegendsFlexBox]}>
        Mobile legends
      </Text>
      <Text style={[styles.pilihMetodePembayaran, styles.homeChild15Position]}>
        Pilih Metode Pembayaran
      </Text>
      <View style={[styles.rectangleView, styles.homeChildLayout2]} />
      <Image
        style={styles.homeChild1}
        contentFit="cover"
        source={require("../assets/rectangle-233.png")}
      />
      <View style={[styles.homeChild2, styles.homeChildLayout2]} />
      <Image
        style={[styles.homeChild3, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-234.png")}
      />
      <View style={[styles.homeChild4, styles.homeChildLayout1]} />
      <Image
        style={styles.homeChild5}
        contentFit="cover"
        source={require("../assets/rectangle-252.png")}
      />
      <View style={[styles.homeChild6, styles.homeChildLayout1]} />
      <Image
        style={[styles.homeChild7, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={[styles.homeChild8, styles.homeChildLayout2]} />
      <Image
        style={[styles.homeChild9, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={[styles.homeChild10, styles.homeChildLayout2]} />
      <Image
        style={[styles.homeChild11, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-232.png")}
      />
      <View style={[styles.homeChild12, styles.homeChildLayout1]} />
      <Image
        style={[styles.homeChild13, styles.homeChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-253.png")}
      />
      <View style={[styles.homeChild14, styles.homeChildLayout1]} />
      <Image
        style={[styles.homeChild15, styles.homeChild15Position]}
        contentFit="cover"
        source={require("../assets/rectangle-271.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: 0,
    position: "absolute",
  },
  mobileLegendsFlexBox: {
    textAlign: "left",
    color: Color.lightColor,
  },
  homeChild15Position: {
    left: 46,
    position: "absolute",
  },
  homeChildLayout2: {
    height: 51,
    width: 308,
    backgroundColor: Color.colorGainsboro,
    left: 26,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildPosition: {
    borderRadius: Border.br_8xs,
    left: 49,
    position: "absolute",
  },
  homeChildLayout1: {
    left: 25,
    height: 51,
    width: 308,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildLayout: {
    height: 37,
    width: 37,
    left: 49,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    backgroundColor: Color.lightColor,
    width: 361,
    height: 48,
  },
  homeInner: {
    top: 48,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
  },
  rectangleIcon: {
    top: 95,
    width: 360,
    height: 170,
  },
  mobileLegends: {
    top: 232,
    left: 68,
    fontSize: FontSize.header_size,
    fontFamily: FontFamily.header,
    position: "absolute",
  },
  pilihMetodePembayaran: {
    top: 275,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "left",
    color: Color.lightColor,
  },
  rectangleView: {
    top: 303,
  },
  homeChild1: {
    top: 316,
    left: 50,
    borderRadius: Border.br_9xs,
    width: 78,
    height: 25,
    position: "absolute",
  },
  homeChild2: {
    top: 365,
  },
  homeChild3: {
    top: 377,
    width: 80,
    height: 27,
  },
  homeChild4: {
    top: 427,
  },
  homeChild5: {
    top: 430,
    left: 38,
    width: 95,
    height: 44,
    position: "absolute",
  },
  homeChild6: {
    top: 484,
  },
  homeChild7: {
    top: 491,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 37,
  },
  homeChild8: {
    top: 545,
  },
  homeChild9: {
    top: 552,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 37,
  },
  homeChild10: {
    top: 607,
  },
  homeChild11: {
    top: 614,
    borderRadius: Border.br_lg_5,
  },
  homeChild12: {
    top: 669,
  },
  homeChild13: {
    top: 682,
    width: 86,
    height: 25,
  },
  homeChild14: {
    top: 731,
  },
  homeChild15: {
    top: 742,
    width: 79,
    height: 29,
  },
  vectorIcon: {
    height: "3.13%",
    width: "6.94%",
    top: "31.88%",
    right: "90.28%",
    bottom: "65%",
    left: "2.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home12;
