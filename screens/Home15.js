import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Home15 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
      <View style={[styles.homeChild, styles.homeChildLayout]} />
      <View style={styles.homeItem} />
      <Image
        style={[styles.systemUiconssideMenu, styles.systemLayout]}
        contentFit="cover"
        source={require("../assets/systemuiconssidemenu1.png")}
      />
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
      <View style={[styles.homeInner, styles.homeInnerPosition]} />
      <View style={[styles.appLogo, styles.systemLayout]}>
        <Image
          style={[styles.icon, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </View>
      <Text style={[styles.uirShop, styles.uirShopTypo]}>UIR SHOP</Text>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Pressable
        style={[styles.systemUiconssideMenu1, styles.systemLayout]}
        onPress={() => navigation.navigate("ProfilePage1")}
      >
        <Image
          style={[styles.icon1, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu1.png")}
        />
      </Pressable>
      <View style={[styles.appLogo, styles.systemLayout]}>
        <Image
          style={[styles.icon, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </View>
      <Text style={[styles.madwaPedia, styles.uirShopTypo]}>Madwa Pedia</Text>
      <Text style={styles.populer}>Populer</Text>
      <View style={[styles.component3, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.mobileLegends, styles.mobileTypo]}>{`Mobile
Legends`}</Text>
      </View>
      <View style={[styles.component4, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.genshinImpact, styles.mobileTypo]}>{`Genshin
Impact`}</Text>
      </View>
      <View style={[styles.component2, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.pubgMobile, styles.mobileTypo]}>{`PUBG
Mobile`}</Text>
      </View>
      <View style={[styles.component5, styles.componentPosition2]}>
        <Image
          style={[styles.component5Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.valorant, styles.ovoTypo]}>VALORANT</Text>
      </View>
      <View style={[styles.component21, styles.componentPosition2]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.apexLegendsMobile, styles.mobileTypo]}
        >{`Apex Legends
Mobile`}</Text>
      </View>
      <View style={[styles.component22, styles.componentPosition2]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.callOfDuty, styles.mobileTypo]}>{`Call of Duty:
Mobile`}</Text>
      </View>
      <View style={[styles.component23, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.steamWalletCode, styles.mobileTypo]}>{`Steam Wallet
Code`}</Text>
      </View>
      <View style={[styles.component24, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-38.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.valorant, styles.ovoTypo]}>Shopeepay</Text>
      </View>
      <View style={[styles.component25, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.apexLegendsMobile, styles.mobileTypo]}
        >{`Kode Voucher
Google Play`}</Text>
      </View>
      <View style={[styles.component26, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-310.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.spotifyPremiumVoucher, styles.mobileTypo]}
        >{`Spotify
Premium
Voucher`}</Text>
      </View>
      <View style={[styles.component27, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-311.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.dana, styles.ovoTypo]}>Dana</Text>
      </View>
      <View style={[styles.component28, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-312.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.ovo, styles.ovoTypo]}>OVO</Text>
      </View>
      <View style={styles.homeChild1} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    overflow: "hidden",
  },
  homeChildLayout: {
    height: 46,
    backgroundColor: Color.lightColor,
    left: -2,
  },
  systemLayout: {
    height: 40,
    width: 40,
    top: 48,
    position: "absolute",
  },
  homeInnerPosition: {
    width: 362,
    top: 48,
    position: "absolute",
  },
  childPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  uirShopTypo: {
    height: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
    left: 121,
    top: 58,
    position: "absolute",
  },
  componentLayout: {
    height: 155,
    top: 155,
    width: 99,
    position: "absolute",
  },
  frameViewPosition: {
    backgroundColor: Color.colorMediumseagreen_100,
    top: "53.55%",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  mobileTypo: {
    textAlign: "center",
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    color: Color.lightColor,
    position: "absolute",
  },
  componentPosition2: {
    top: 326,
    height: 155,
    width: 99,
    position: "absolute",
  },
  ovoTypo: {
    top: 109,
    textAlign: "center",
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    color: Color.lightColor,
    position: "absolute",
  },
  componentPosition1: {
    top: 497,
    height: 155,
    width: 99,
    position: "absolute",
  },
  componentPosition: {
    top: 668,
    height: 155,
    width: 99,
    position: "absolute",
  },
  homeChild: {
    width: 361,
    top: 48,
    height: 46,
    backgroundColor: Color.lightColor,
    left: -2,
    position: "absolute",
  },
  homeItem: {
    top: 0,
    height: 48,
    left: 0,
    width: 361,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  systemUiconssideMenu: {
    left: 21,
    overflow: "hidden",
  },
  homeInner: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 362,
    left: 0,
  },
  icon: {
    bottom: "0%",
    height: "100%",
  },
  appLogo: {
    left: 71,
  },
  uirShop: {
    width: 112,
  },
  rectangleView: {
    height: 46,
    backgroundColor: Color.lightColor,
    left: -2,
    width: 362,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
  },
  systemUiconssideMenu1: {
    left: 21,
  },
  madwaPedia: {
    width: 158,
  },
  populer: {
    top: 104,
    left: 20,
    fontSize: FontSize.size_21xl,
    color: Color.lightColor,
    textAlign: "left",
    fontFamily: FontFamily.header,
    position: "absolute",
  },
  component3Child: {
    height: "63.87%",
    bottom: "36.13%",
    borderRadius: Border.br_mini,
  },
  component3Item: {
    height: "0.65%",
    width: "101.01%",
    right: "-0.51%",
    bottom: "45.81%",
    left: "-0.51%",
    top: "53.55%",
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  component3Inner: {
    height: "46.45%",
    borderRadius: Border.br_mini,
    bottom: "0%",
  },
  frameView: {
    height: "32.9%",
    bottom: "13.55%",
  },
  vectorIcon: {
    top: 71,
    height: 28,
    width: 99,
    left: 0,
    position: "absolute",
  },
  mobileLegends: {
    left: 23,
    top: 99,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
  },
  component3: {
    left: 8,
  },
  genshinImpact: {
    left: 24,
    top: 99,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
  },
  component4: {
    left: 129,
  },
  pubgMobile: {
    left: 29,
    top: 99,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
  },
  component2: {
    left: 250,
  },
  component5Child: {
    height: "54.84%",
    bottom: "45.16%",
    borderRadius: Border.br_mini,
  },
  valorant: {
    left: 15,
  },
  component5: {
    left: 8,
  },
  apexLegendsMobile: {
    left: 6,
    top: 99,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
  },
  component21: {
    left: 129,
  },
  callOfDuty: {
    left: 12,
    top: 99,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
  },
  component22: {
    left: 250,
  },
  steamWalletCode: {
    left: 9,
    top: 99,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
  },
  component23: {
    left: 8,
  },
  component24: {
    left: 8,
  },
  component25: {
    left: 129,
  },
  spotifyPremiumVoucher: {
    top: 89,
    left: 21,
  },
  component26: {
    left: 250,
  },
  dana: {
    left: 34,
  },
  component27: {
    left: 130,
  },
  ovo: {
    left: 36,
  },
  component28: {
    left: 250,
  },
  homeChild1: {
    top: 620,
    left: 190,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    height: 845,
    overflow: "hidden",
  },
});

export default Home15;
