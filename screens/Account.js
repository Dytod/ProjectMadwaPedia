import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import EmailInput from "../components/EmailInput";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.account}
      onPress={() => navigation.navigate("ProfilePage")}
    >
      <View style={styles.accountChild} />
      <AutoTintTruePrivacyChip
        imageDimensions={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop={0}
        autoTintTruePrivacyChipLeft={0}
        autoTintTruePrivacyChipWidth={360}
        autoTintTruePrivacyChipHeight="unset"
        autoTintTruePrivacyChipRight="unset"
        autoTintTruePrivacyChipBottom="unset"
      />
      <View style={styles.accountItem} />
      <EmailInput
        emailAddress="fransdyto21@gmail.com"
        userEmail="Alamat E-mail"
        propTop={199}
      />
      <EmailInput
        emailAddress="**********"
        userEmail="Kata Sandi"
        propTop={302}
      />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("ProfilePage")}
      >
        <View style={[styles.child, styles.iconPosition]} />
        <Text style={[styles.login, styles.loginTypo]}>Login</Text>
      </Pressable>
      <Text style={[styles.belumPunyaAkunContainer, styles.loginTypo]}>
        <Text style={styles.belumPunyaAkun}>Belum punya akun?</Text>
        <Text style={styles.text}>{` `}</Text>
        <Text style={styles.daftarDisiniCuy}>Daftar disini cuy</Text>
      </Text>
      <Image
        style={[styles.accountInner, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Text style={[styles.masuk, styles.masukTypo]}>Masuk</Text>
      <View style={styles.rectangleView} />
      <View style={[styles.appLogo, styles.icon1Layout]}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </View>
      <Text style={[styles.madwaPedia, styles.masukTypo]}>Madwa Pedia</Text>
      <Image
        style={[styles.icon1, styles.icon1Layout]}
        contentFit="cover"
        source={require("../assets/systemuiconssidemenu2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  loginTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  masukTypo: {
    textAlign: "left",
    fontFamily: FontFamily.header,
    position: "absolute",
  },
  icon1Layout: {
    width: 40,
    top: 49,
    height: 40,
    position: "absolute",
  },
  accountChild: {
    top: 0,
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
    left: 0,
    position: "absolute",
  },
  accountItem: {
    top: 48,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    left: 0,
    position: "absolute",
  },
  child: {
    backgroundColor: Color.colorMediumseagreen_100,
    position: "absolute",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_11xl,
  },
  login: {
    width: "47.02%",
    top: "20%",
    left: "26.51%",
    fontWeight: "500",
    fontFamily: FontFamily.uI16Medium,
    color: Color.lightColor,
  },
  pressable: {
    top: 603,
    left: 30,
    width: 315,
    height: 40,
    position: "absolute",
  },
  belumPunyaAkun: {
    color: Color.lightColor,
  },
  text: {
    color: Color.colorBlack,
  },
  daftarDisiniCuy: {
    color: Color.colorGoldenrod,
  },
  belumPunyaAkunContainer: {
    top: 565,
    left: 25,
    fontFamily: FontFamily.spBody1Regular,
  },
  accountInner: {
    top: 588,
    left: 204,
    width: 141,
  },
  masuk: {
    top: 113,
    left: 43,
    fontSize: FontSize.header_size,
    color: Color.lightColor,
  },
  rectangleView: {
    width: 360,
    height: 46,
    top: 49,
    backgroundColor: Color.lightColor,
    left: 0,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
  appLogo: {
    left: 73,
  },
  madwaPedia: {
    top: 59,
    left: 123,
    color: Color.colorMediumseagreen_100,
    display: "flex",
    alignItems: "center",
    width: 158,
    height: 25,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.header,
  },
  icon1: {
    left: 23,
    overflow: "hidden",
  },
  account: {
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
});

export default Account;
