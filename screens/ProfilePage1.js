import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const ProfilePage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
      <View style={styles.profilePageChild} />
      <View style={styles.profilePageItem} />
      <Image
        style={[styles.systemUiconssideMenu, styles.appLayout]}
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
      <View style={[styles.appLogo, styles.appLayout]}>
        <Image
          style={[styles.icon, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </View>
      <Text style={[styles.uirShop, styles.uirShopTypo]}>UIR SHOP</Text>
      <Text style={styles.populer}>Populer</Text>
      <View style={[styles.component3, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.mobileLegends, styles.mobileFlexBox]}>{`Mobile
Legends`}</Text>
      </View>
      <View style={[styles.component4, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.genshinImpact, styles.mobileFlexBox]}>{`Genshin
Impact`}</Text>
      </View>
      <View style={[styles.component2, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.pubgMobile, styles.mobileFlexBox]}>{`PUBG
Mobile`}</Text>
      </View>
      <View style={[styles.component5, styles.componentPosition2]}>
        <Image
          style={[styles.component5Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.valorant, styles.ovoTypo]}>VALORANT</Text>
      </View>
      <View style={[styles.component21, styles.componentPosition2]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.apexLegendsMobile, styles.mobileFlexBox]}
        >{`Apex Legends
Mobile`}</Text>
      </View>
      <View style={[styles.component22, styles.componentPosition2]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.callOfDuty, styles.mobileFlexBox]}>{`Call of Duty:
Mobile`}</Text>
      </View>
      <View style={[styles.component23, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.steamWalletCode, styles.mobileFlexBox]}
        >{`Steam Wallet
Code`}</Text>
      </View>
      <View style={[styles.component24, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-38.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.valorant, styles.ovoTypo]}>Shopeepay</Text>
      </View>
      <View style={[styles.component25, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.apexLegendsMobile, styles.mobileFlexBox]}
        >{`Kode Voucher
Google Play`}</Text>
      </View>
      <View style={[styles.component26, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-310.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text
          style={[styles.spotifyPremiumVoucher, styles.mobileFlexBox]}
        >{`Spotify
Premium
Voucher`}</Text>
      </View>
      <View style={[styles.component27, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-311.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.dana, styles.ovoTypo]}>Dana</Text>
      </View>
      <View style={[styles.component28, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.component3ChildPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-312.png")}
        />
        <View style={[styles.component3Item, styles.component3ItemBorder]} />
        <View
          style={[styles.component3Inner, styles.component3ChildPosition]}
        />
        <View style={[styles.frameView, styles.buttonChildPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.ovo, styles.ovoTypo]}>OVO</Text>
      </View>
      <View style={styles.menuModule}>
        <View style={styles.lightPosition}>
          <View style={[styles.bgLight, styles.lightPosition]} />
          <Pressable
            style={[styles.primaryButton, styles.buttonLayout]}
            onPress={() => navigation.navigate("Account2")}
          >
            <View
              style={[styles.primaryButtonChild, styles.buttonChildPosition]}
            />
            <Text style={[styles.masuk, styles.masukTypo]}>Masuk</Text>
          </Pressable>
          <Pressable
            style={[styles.secondaryButton, styles.buttonLayout]}
            onPress={() => navigation.navigate("Account3")}
          >
            <View
              style={[styles.secondaryButtonChild, styles.buttonChildPosition]}
            />
            <Text style={[styles.mendaftar, styles.masukTypo]}>Mendaftar</Text>
          </Pressable>
          <Text
            style={[styles.belumPunyaAkun, styles.mobileFlexBox]}
          >{`Belum punya akun?
Daftar dulu lah`}</Text>
          <View style={styles.lightChild} />
        </View>
        <View style={[styles.appLogo1, styles.appLayout]}>
          <Image
            style={[styles.icon, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/3426127-1.png")}
          />
        </View>
        <Text style={[styles.madwaPedia, styles.uirShopTypo]}>Madwa Pedia</Text>
      </View>
      <View style={[styles.profilePageInner, styles.component3ItemBorder]} />
      <View style={[styles.rectangleView, styles.vectorIconLayout]} />
      <Pressable
        style={styles.systemUiconsclose}
        onPress={() => navigation.navigate("Home15")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconsclose.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  appLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  childLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  uirShopTypo: {
    height: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  componentLayout: {
    height: 155,
    top: 155,
    width: 99,
    position: "absolute",
  },
  component3ChildPosition: {
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  component3ItemBorder: {
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  buttonChildPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  vectorIconLayout: {
    width: 99,
    position: "absolute",
  },
  mobileFlexBox: {
    textAlign: "center",
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
  lightPosition: {
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    width: 200,
    left: 51,
    height: 40,
    position: "absolute",
  },
  masukTypo: {
    fontFamily: FontFamily.uI16Medium,
    top: "20%",
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    overflow: "hidden",
  },
  profilePageChild: {
    left: -2,
    height: 46,
    width: 361,
    backgroundColor: Color.lightColor,
    top: 48,
    position: "absolute",
  },
  profilePageItem: {
    height: 48,
    left: 0,
    top: 0,
    width: 361,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  systemUiconssideMenu: {
    left: 21,
    top: 48,
    overflow: "hidden",
  },
  icon: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
    height: "100%",
    overflow: "hidden",
  },
  appLogo: {
    left: 71,
    top: 48,
  },
  uirShop: {
    top: 58,
    left: 121,
    width: 112,
    color: Color.colorMediumseagreen_100,
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
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  component3Item: {
    height: "0.65%",
    width: "101.01%",
    right: "-0.51%",
    bottom: "45.81%",
    left: "-0.51%",
    top: "53.55%",
  },
  component3Inner: {
    height: "46.45%",
    backgroundColor: Color.colorMediumseagreen_100,
    top: "53.55%",
    bottom: "0%",
  },
  frameView: {
    height: "32.9%",
    bottom: "13.55%",
    backgroundColor: Color.colorMediumseagreen_100,
    top: "53.55%",
    overflow: "hidden",
  },
  vectorIcon: {
    top: 71,
    height: 28,
    left: 0,
  },
  mobileLegends: {
    left: 23,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
    top: 99,
  },
  component3: {
    left: 8,
  },
  genshinImpact: {
    left: 24,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
    top: 99,
  },
  component4: {
    left: 129,
  },
  pubgMobile: {
    left: 29,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
    top: 99,
  },
  component2: {
    left: 250,
  },
  component5Child: {
    height: "54.84%",
    bottom: "45.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
  },
  valorant: {
    left: 15,
  },
  component5: {
    left: 8,
  },
  apexLegendsMobile: {
    left: 6,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
    top: 99,
  },
  component21: {
    left: 129,
  },
  callOfDuty: {
    left: 12,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
    top: 99,
  },
  component22: {
    left: 250,
  },
  steamWalletCode: {
    left: 9,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
    top: 99,
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
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    textAlign: "center",
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
  bgLight: {
    backgroundColor: Color.colorMediumseagreen_100,
  },
  primaryButtonChild: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgreen,
  },
  masuk: {
    left: "34%",
    color: Color.lightColor,
  },
  primaryButton: {
    top: 237,
  },
  secondaryButtonChild: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.lightColor,
  },
  mendaftar: {
    left: "25%",
    color: Color.colorMediumseagreen_100,
  },
  secondaryButton: {
    top: 298,
  },
  belumPunyaAkun: {
    top: 127,
    left: 44,
    textAlign: "center",
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
  },
  lightChild: {
    top: 60,
    left: 22,
    borderColor: Color.lightColor,
    borderTopWidth: 2,
    width: 264,
    height: 2,
    borderStyle: "solid",
    position: "absolute",
  },
  appLogo1: {
    top: 18,
    left: 42,
  },
  madwaPedia: {
    top: 26,
    left: 92,
    width: 153,
    color: Color.lightColor,
  },
  menuModule: {
    width: "79.17%",
    right: "27.22%",
    left: "-6.39%",
    bottom: 0,
    top: 48,
    position: "absolute",
    overflow: "hidden",
  },
  profilePageInner: {
    width: 362,
    height: 1,
    left: 0,
    top: 48,
  },
  rectangleView: {
    left: 261,
    backgroundColor: Color.colorGray_400,
    height: 752,
    top: 48,
  },
  icon2: {
    width: "100%",
  },
  systemUiconsclose: {
    left: 216,
    top: 50,
    width: 45,
    height: 44,
    position: "absolute",
  },
  profilePage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_11xl,
  },
});

export default ProfilePage1;
