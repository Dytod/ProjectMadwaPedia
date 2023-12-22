import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homePosition]} />
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
      <View style={[styles.homeItem, styles.homeItemBorder]} />
      <Pressable
        style={[styles.homeInner, styles.homeInnerPosition]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.systemUiconssideMenu, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.appLogo, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={[styles.icon1, styles.icon1Position]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.uirShop, styles.uirShopPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Text style={[styles.uirShop1, styles.uirShop1Typo]}>UIR SHOP</Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.lineViewLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.systemUiconssideMenu, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.appLogo, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={[styles.icon1, styles.icon1Position]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </Pressable>
      <Text style={[styles.madwaPedia, styles.uirShop1Typo]}>Madwa Pedia</Text>
      <View style={[styles.rectangleView, styles.icon1Position]} />
      <AutoTintTruePrivacyChip
        imageDimensions={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop="0%"
        autoTintTruePrivacyChipLeft="0%"
        autoTintTruePrivacyChipWidth="100%"
        autoTintTruePrivacyChipHeight="6%"
        autoTintTruePrivacyChipRight="0%"
        autoTintTruePrivacyChipBottom="94%"
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={styles.homeChild1} />
      <Image
        style={[styles.vectorIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.avatar40x40Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/avatar-40x40.png")}
      />
      <Text style={[styles.fransdytoependristudentuira, styles.keamananTypo]}>
        fransdytoependri@student.uir.ac.id
      </Text>
      <Text style={[styles.historyTransaksi, styles.keamananClr]}>
        History Transaksi
      </Text>
      <Image
        style={styles.materialSymbolslockOutlineIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolslockoutline.png")}
      />
      <Text style={[styles.keamanan, styles.keamananClr]}>Keamanan</Text>
      <Image
        style={styles.materialSymbolsarrowCircleIcon}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowcirclerightoutline.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    left: 0,
    position: "absolute",
  },
  homeItemBorder: {
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  homeInnerPosition: {
    left: "-0.56%",
    bottom: "88.25%",
    top: "6%",
    height: "5.75%",
    backgroundColor: Color.lightColor,
  },
  appLogoPosition: {
    height: "5%",
    width: "11.11%",
    bottom: "89%",
    top: "6%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  icon1Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  uirShopPosition: {
    top: "7.25%",
    position: "absolute",
  },
  uirShop1Typo: {
    alignItems: "center",
    display: "flex",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    height: "3.13%",
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  lineViewLayout: {
    width: "100.56%",
    position: "absolute",
  },
  keamananTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  keamananClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
  },
  homeItem: {
    top: 48,
    width: 362,
    height: 1,
    left: 0,
    position: "absolute",
  },
  homeInner: {
    right: "0.28%",
    width: "100.28%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  systemUiconssideMenu: {
    left: "5.83%",
    right: "83.06%",
  },
  icon1: {
    bottom: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  appLogo: {
    right: "69.17%",
    left: "19.72%",
  },
  uirShop1: {
    width: "31.11%",
  },
  uirShop: {
    left: "33.61%",
  },
  rectanglePressable: {
    right: "0%",
    left: "-0.56%",
    bottom: "88.25%",
    top: "6%",
    height: "5.75%",
    backgroundColor: Color.lightColor,
  },
  madwaPedia: {
    width: "43.89%",
    left: "33.33%",
    top: "7.25%",
    position: "absolute",
  },
  rectangleView: {
    height: "6%",
    right: "-0.28%",
    bottom: "94%",
    width: "100.28%",
    backgroundColor: Color.lightColor,
  },
  lineView: {
    height: "0.13%",
    top: "5.94%",
    right: "-0.42%",
    bottom: "93.94%",
    left: "-0.14%",
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  homeChild1: {
    top: 222,
    left: 27,
    borderRadius: Border.br_3xs,
    width: 309,
    height: 106,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  vectorIcon: {
    top: 511,
    width: 460,
    height: 214,
  },
  vectorIcon1: {
    top: 585,
    left: -2,
    width: 363,
    height: 215,
    position: "absolute",
  },
  avatar40x40Icon: {
    top: 110,
    right: 145,
    bottom: 626,
    left: 151,
    borderRadius: Border.br_80xl,
    position: "absolute",
  },
  fransdytoependristudentuira: {
    top: 190,
    left: 63,
    fontSize: FontSize.size_smi,
    color: Color.lightColor,
    textAlign: "center",
    position: "absolute",
  },
  historyTransaksi: {
    top: 233,
    left: 43,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
  },
  materialSymbolslockOutlineIcon: {
    top: 275,
    left: 47,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  keamanan: {
    top: 281,
    left: 94,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
  },
  materialSymbolsarrowCircleIcon: {
    top: 278,
    left: 277,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home1;
