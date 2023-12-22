import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import EmailInputContainer from "../components/EmailInputContainer";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Account3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
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
      <EmailInputContainer
        inputPlaceholder="Nama Anda di sini"
        inputLabel="Username"
        propTop={194}
        onInputTextPress={() => navigation.navigate("Account1")}
      />
      <Pressable
        style={styles.inputtext}
        onPress={() => navigation.navigate("Account1")}
      >
        <Image
          style={[styles.bgIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={styles.emailAndaDi}>Email Anda di sini</Text>
        <Text style={[styles.alamatEMail, styles.mendaftarTypo]}>
          Alamat E-mail
        </Text>
        <Text style={[styles.show, styles.showTypo]}>Show</Text>
      </Pressable>
      <EmailInputContainer
        inputPlaceholder="Sandi Anda di sini"
        inputLabel="Kata Sandi"
        propTop={400}
        onInputTextPress={() => navigation.navigate("Account1")}
      />
      <EmailInputContainer
        inputPlaceholder="Sandi Anda di sini"
        inputLabel="Konfirmasi Kata Sandi"
        propTop={502}
        onInputTextPress={() => navigation.navigate("Account1")}
      />
      <View style={styles.view}>
        <View style={styles.child} />
        <Text style={[styles.lanjutkan, styles.textTypo]}>Lanjutkan</Text>
      </View>
      <Pressable
        style={styles.udahPunyaAkunContainer}
        onPress={() => navigation.navigate("Account2")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.udahPunyaAkun}>Udah punya akun?</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.loginLah}>Login lah</Text>
        </Text>
      </Pressable>
      <Image
        style={styles.accountInner}
        contentFit="cover"
        source={require("../assets/line-41.png")}
      />
      <Text style={[styles.mendaftar, styles.mendaftarTypo]}>Mendaftar</Text>
      <View style={styles.rectangleView} />
      <View style={[styles.appLogo, styles.appLogoLayout]}>
        <Image
          style={styles.iconPosition}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </View>
      <Text style={styles.madwaPedia}>Madwa Pedia</Text>
      <Pressable
        style={[styles.pressable, styles.appLogoLayout]}
        onPress={() => navigation.navigate("Home15")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu2.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  mendaftarTypo: {
    fontFamily: FontFamily.header,
    color: Color.lightColor,
    textAlign: "left",
    position: "absolute",
  },
  showTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontSize: FontSize.size_xl,
  },
  appLogoLayout: {
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
  bgIcon: {
    borderRadius: Border.br_5xs,
  },
  emailAndaDi: {
    left: 16,
    color: Color.colorLightgray_100,
    textAlign: "left",
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  alamatEMail: {
    marginTop: -52,
    left: 12,
    fontSize: FontSize.size_mini,
    color: Color.lightColor,
    top: "50%",
    fontFamily: FontFamily.header,
  },
  show: {
    right: 16,
    color: Color.greenPrimary,
    textAlign: "right",
    display: "none",
    fontSize: FontSize.uI16Medium_size,
    marginTop: -9,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    top: "50%",
  },
  inputtext: {
    top: 298,
    right: 10,
    left: 7,
    height: 50,
    position: "absolute",
  },
  child: {
    backgroundColor: Color.colorMediumseagreen_100,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
  lanjutkan: {
    width: "47.02%",
    top: "20%",
    left: "26.51%",
    color: Color.lightColor,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    position: "absolute",
  },
  view: {
    top: 662,
    left: 25,
    width: 315,
    height: 40,
    position: "absolute",
  },
  udahPunyaAkun: {
    color: Color.lightColor,
  },
  text1: {
    color: Color.colorBlack,
  },
  loginLah: {
    color: Color.colorGoldenrod,
  },
  text: {
    fontFamily: FontFamily.spBody1Regular,
  },
  udahPunyaAkunContainer: {
    left: 56,
    top: 624,
    position: "absolute",
  },
  accountInner: {
    top: 647,
    left: 225,
    width: 78,
    height: 0,
    position: "absolute",
  },
  mendaftar: {
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
    fontFamily: FontFamily.header,
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  pressable: {
    left: 23,
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

export default Account3;
