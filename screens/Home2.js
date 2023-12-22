import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home2 = () => {
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
          source={require("../assets/systemuiconssidemenu2.png")}
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
          source={require("../assets/systemuiconssidemenu2.png")}
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
      />
      <Pressable
        style={[styles.linePressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Home8")}
      />
      <View style={[styles.rectangleView, styles.homeChildLayout1]} />
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
        style={[styles.rectangleIcon, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.iconPosition}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.tablerdiscount2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/tablerdiscount2.png")}
      />
      <Text
        style={[styles.uirshopGassDouble, styles.topTypo1]}
      >{`Uirshop Gass!! Double Bonus!
Cashback s.d. 80% + Bonus... `}</Text>
      <Text
        style={[styles.doubleBonusSd, styles.topTypo]}
      >{`Double Bonus! s.d. 80% + Bonus 
Diamonds  dan Skin MLBB`}</Text>
      <View style={[styles.homeChild2, styles.homeChildLayout1]} />
      <Image
        style={[styles.homeChild3, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.homeChild4Position}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.tablerdiscount2Icon1, styles.homeChild4Position]}
        contentFit="cover"
        source={require("../assets/tablerdiscount2.png")}
      />
      <Text
        style={[styles.topUpMobile, styles.topTypo1]}
      >{`TOP UP MOBILE LEGENDS,
CASHBACK 10RIBU!`}</Text>
      <Text
        style={[styles.topUpDiamond, styles.topTypo]}
      >{`Top up diamond Mobile Legends kamu
pakai GoPay, minimum 50.000...`}</Text>
      <View style={[styles.homeChild5, styles.homeChildLayout1]} />
      <Image
        style={[styles.homeChild6, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <Image
        style={styles.homeChild7Position}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.tablerdiscount2Icon2, styles.homeChild7Position]}
        contentFit="cover"
        source={require("../assets/tablerdiscount2.png")}
      />
      <Text style={[styles.topUpPubgm, styles.topTypo1]}>
        TOP UP PUBGM, DISKON 20%
      </Text>
      <Text
        style={[styles.janganLewatinTop, styles.topTypo]}
      >{`jangan lewatin! Top up UC PUBGM kamu
dengan OVO setiap jam 3 sore`}</Text>
      <View style={[styles.homeChild8, styles.homeChildLayout1]} />
      <Image
        style={[styles.homeChild9, styles.homeChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Image
        style={styles.homeChild10Position}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.tablerdiscount2Icon3, styles.homeChild10Position]}
        contentFit="cover"
        source={require("../assets/tablerdiscount2.png")}
      />
      <Text
        style={[styles.topUpGenshin, styles.topTypo1]}
      >{`TOP UP GENSHIN IMPACT
CASHBACK 10.000`}</Text>
      <Text
        style={[styles.topUpGenesis, styles.topTypo]}
      >{`Top up Genesis Crystal kamu, dapatkan
Cashback hingga 10.000 dengan DANA`}</Text>
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
  homeChildLayout1: {
    height: 87,
    width: 309,
    borderRadius: Border.br_3xs,
    left: 28,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  homeChildLayout: {
    borderRadius: Border.br_mini,
    left: "11.39%",
    right: "74.72%",
    width: "13.89%",
    height: "6.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    height: 25,
    width: 25,
    left: 71,
    top: 170,
    position: "absolute",
  },
  topTypo1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.android13BodyMediumSemibold_size,
    left: 102,
    textAlign: "left",
    position: "absolute",
  },
  topTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_2xs,
    color: Color.colorBlack,
    left: 102,
    textAlign: "left",
    position: "absolute",
  },
  homeChild4Position: {
    top: 283,
    height: 25,
    width: 25,
    left: 71,
    position: "absolute",
  },
  homeChild7Position: {
    top: 393,
    height: 25,
    width: 25,
    left: 71,
    position: "absolute",
  },
  homeChild10Position: {
    top: 506,
    height: 25,
    width: 25,
    left: 71,
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
    top: 120,
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
  rectangleIcon: {
    top: "17.25%",
    bottom: "76.5%",
  },
  tablerdiscount2Icon: {
    overflow: "hidden",
  },
  uirshopGassDouble: {
    top: 128,
  },
  doubleBonusSd: {
    top: 166,
  },
  homeChild2: {
    top: 233,
  },
  homeChild3: {
    top: "31.38%",
    bottom: "62.38%",
  },
  tablerdiscount2Icon1: {
    overflow: "hidden",
  },
  topUpMobile: {
    top: 241,
  },
  topUpDiamond: {
    top: 279,
  },
  homeChild5: {
    top: 343,
  },
  homeChild6: {
    top: "45.13%",
    bottom: "48.63%",
  },
  tablerdiscount2Icon2: {
    overflow: "hidden",
  },
  topUpPubgm: {
    top: 361,
  },
  janganLewatinTop: {
    top: 389,
  },
  homeChild8: {
    top: 456,
  },
  homeChild9: {
    top: "59.25%",
    bottom: "34.5%",
  },
  tablerdiscount2Icon3: {
    overflow: "hidden",
  },
  topUpGenshin: {
    top: 464,
  },
  topUpGenesis: {
    top: 502,
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

export default Home2;
