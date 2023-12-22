import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.appLogo}>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/3426127-11.png")}
        />
      </View>
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Home15")}
      >
        <View style={[styles.secondaryButtonChild, styles.iconPosition]} />
        <Text style={styles.getStarted}>Get Started</Text>
      </Pressable>
      <Text style={[styles.welcomeTo, styles.welcomeToTypo]}>Welcome To</Text>
      <Text style={[styles.madwaPedia, styles.welcomeToTypo]}>Madwa Pedia</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <View style={[styles.loginChild, styles.loginPosition]} />
      <AutoTintTruePrivacyChip
        imageDimensions={require("../assets/content1.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop={0}
        autoTintTruePrivacyChipLeft={0}
        autoTintTruePrivacyChipWidth={360}
        autoTintTruePrivacyChipHeight="unset"
        autoTintTruePrivacyChipRight="unset"
        autoTintTruePrivacyChipBottom="unset"
      />
      <View style={[styles.loginItem, styles.loginPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  welcomeToTypo: {
    fontFamily: FontFamily.header,
    color: Color.colorMediumseagreen_100,
    position: "absolute",
  },
  vectorIconLayout1: {
    height: 480,
    width: 480,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 509,
    width: 599,
    position: "absolute",
  },
  loginPosition: {
    left: -1,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  appLogo: {
    top: 191,
    left: 117,
    width: 125,
    height: 116,
    position: "absolute",
  },
  secondaryButtonChild: {
    borderColor: Color.colorMediumseagreen_100,
    borderWidth: 3,
    borderStyle: "solid",
    backgroundColor: Color.lightColor,
    borderRadius: Border.br_11xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  getStarted: {
    top: "22%",
    left: "24.4%",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    position: "absolute",
  },
  secondaryButton: {
    top: 452,
    left: 64,
    width: 250,
    height: 50,
    position: "absolute",
  },
  welcomeTo: {
    top: 323,
    left: 94,
    fontSize: FontSize.header_size,
    textAlign: "left",
  },
  madwaPedia: {
    top: 347,
    left: 48,
    fontSize: 35,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 282,
    height: 80,
  },
  vectorIcon: {
    top: -109,
    left: 40,
  },
  vectorIcon1: {
    top: 480,
    left: -192,
  },
  vectorIcon2: {
    top: 527,
    left: -218,
  },
  vectorIcon3: {
    top: -133,
    left: 130,
  },
  loginChild: {
    top: 0,
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
  },
  loginItem: {
    top: 48,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    borderStyle: "solid",
  },
  login: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
    borderRadius: Border.br_11xl,
  },
});

export default Login;
