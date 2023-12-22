import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Pressable
        style={[styles.homeChild, styles.homePosition]}
        onPress={() => navigation.navigate("Home8")}
      />
      <AutoTintTruePrivacyChip
        imageDimensions={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop={0}
        autoTintTruePrivacyChipLeft={0}
        autoTintTruePrivacyChipWidth={360}
        autoTintTruePrivacyChipHeight="unset"
        autoTintTruePrivacyChipRight="unset"
        autoTintTruePrivacyChipBottom="unset"
        onStatusBarPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.homeItem, styles.homeItemBorder]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.homeInner, styles.homeInnerPosition]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.systemUiconssideMenu, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu.png")}
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
        style={[styles.rectanglePressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.systemUiconssideMenu, styles.appLogoPosition]}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu.png")}
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
      <Pressable
        style={[styles.homeChild1, styles.icon1Position]}
        onPress={() => navigation.navigate("Home8")}
      />
      <AutoTintTruePrivacyChip
        imageDimensions={require("../assets/content.png")}
        autoTintTruePrivacyChipPosition="absolute"
        autoTintTruePrivacyChipTop="0%"
        autoTintTruePrivacyChipLeft="0%"
        autoTintTruePrivacyChipWidth="100%"
        autoTintTruePrivacyChipHeight="6%"
        autoTintTruePrivacyChipRight="0%"
        autoTintTruePrivacyChipBottom="94%"
        onStatusBarPress={() => navigation.navigate("Home8")}
      />
      <Pressable
        style={[styles.linePressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
      <View style={[styles.rectangleView, styles.homeChild2Position]} />
      <View style={[styles.homeChild2, styles.homeChild2Position]} />
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
      <Text style={[styles.saldoUircashAnda, styles.rp650Position]}>
        Saldo Uircash Anda
      </Text>
      <Image
        style={styles.phwalletFillIcon}
        contentFit="cover"
        source={require("../assets/phwalletfill.png")}
      />
      <Text style={[styles.rp650, styles.rp650Position]}>Rp. 650</Text>
      <Text style={[styles.lihatHistoriTransaksi, styles.rp650Position]}>
        Lihat Histori Transaksi
      </Text>
      <Pressable
        style={styles.materialSymbolsarrowCircle}
        onPress={() => navigation.navigate("Home3")}
      >
        <Image
          style={styles.icon4}
          contentFit="cover"
          source={require("../assets/materialsymbolsarrowcirclerightoutline1.png")}
        />
      </Pressable>
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
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
    height: "3.13%",
  },
  pressableLayout: {
    width: "100.56%",
    position: "absolute",
  },
  homeChild2Position: {
    width: 309,
    borderRadius: Border.br_3xs,
    left: 28,
    top: 120,
    position: "absolute",
  },
  rp650Position: {
    textAlign: "center",
    left: 35,
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
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
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
    height: "100%",
    overflow: "hidden",
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
  homeChild1: {
    height: "6%",
    right: "-0.28%",
    bottom: "94%",
    width: "100.28%",
    backgroundColor: Color.lightColor,
  },
  linePressable: {
    height: "0.13%",
    top: "5.94%",
    right: "-0.42%",
    bottom: "93.94%",
    left: "-0.14%",
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  rectangleView: {
    backgroundColor: Color.colorMediumseagreen_100,
    height: 124,
  },
  homeChild2: {
    height: 87,
    backgroundColor: Color.lightColor,
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
  saldoUircashAnda: {
    top: 135,
    fontFamily: FontFamily.interRegular,
    color: "#2c784c",
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 35,
  },
  phwalletFillIcon: {
    top: 158,
    left: 289,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  rp650: {
    top: 151,
    fontSize: 28,
    fontFamily: FontFamily.biryaniRegular,
    color: Color.colorDarkolivegreen,
    justifyContent: "center",
    width: 101,
    height: 44,
    textAlign: "center",
    left: 35,
    alignItems: "center",
    display: "flex",
  },
  lihatHistoriTransaksi: {
    top: 216,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.lightColor,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    left: 35,
  },
  icon4: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  materialSymbolsarrowCircle: {
    left: 295,
    top: 212,
    width: 24,
    height: 24,
    position: "absolute",
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

export default Home4;
