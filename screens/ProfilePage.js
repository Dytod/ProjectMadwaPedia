import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
      <View style={[styles.profilePageChild, styles.profileLayout]} />
      <View style={[styles.profilePageItem, styles.profileLayout]} />
      <Image
        style={[styles.systemUiconssideMenu, styles.appLayout]}
        contentFit="cover"
        source={require("../assets/systemuiconssidemenu1.png")}
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
      <View style={[styles.appLogo, styles.appLayout]}>
        <Image
          style={[styles.icon, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/3426127-1.png")}
        />
      </View>
      <Text style={[styles.uirShop, styles.uirShopTypo]}>UIR SHOP</Text>
      <Text style={styles.populer}>Populer</Text>
      <View style={[styles.component3, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.mobileLegends, styles.mobileTypo]}>{`Mobile
Legends`}</Text>
      </View>
      <View style={[styles.component4, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.genshinImpact, styles.mobileTypo]}>{`Genshin
Impact`}</Text>
      </View>
      <View style={[styles.component2, styles.componentLayout]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-33.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.pubgMobile, styles.mobileTypo]}>{`PUBG
Mobile`}</Text>
      </View>
      <View style={[styles.component5, styles.componentPosition2]}>
        <Image
          style={[styles.component5Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-34.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.valorant, styles.ovoTypo]}>VALORANT</Text>
      </View>
      <View style={[styles.component21, styles.componentPosition2]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-35.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
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
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-36.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.callOfDuty, styles.mobileTypo]}>{`Call of Duty:
Mobile`}</Text>
      </View>
      <View style={[styles.component23, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-37.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.steamWalletCode, styles.mobileTypo]}>{`Steam Wallet
Code`}</Text>
      </View>
      <View style={[styles.component24, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-38.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.valorant, styles.ovoTypo]}>Shopeepay</Text>
      </View>
      <View style={[styles.component25, styles.componentPosition1]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-39.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
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
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-310.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
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
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-311.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.dana, styles.ovoTypo]}>Dana</Text>
      </View>
      <View style={[styles.component28, styles.componentPosition]}>
        <Image
          style={[styles.component3Child, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-312.png")}
        />
        <View style={styles.component3Item} />
        <View style={[styles.component3Inner, styles.frameViewPosition]} />
        <View style={[styles.frameView, styles.frameViewPosition]} />
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
          <View style={styles.lightChild} />
          <View style={[styles.avatar, styles.avatarPosition]}>
            <Image
              style={[styles.avatar40x40Icon, styles.lightPosition]}
              contentFit="cover"
              source={require("../assets/avatar-40x40.png")}
            />
          </View>
          <View style={[styles.lightItem, styles.avatarPosition]} />
          <Image
            style={[styles.systemUiconssettings, styles.systemLayout]}
            contentFit="cover"
            source={require("../assets/systemuiconssettings.png")}
          />
          <Pressable
            style={styles.systemUiconswallet}
            onPress={() => navigation.navigate("Home4")}
          >
            <Image
              style={[styles.icon1, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/systemuiconswallet.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.systemUiconsbellRinging, styles.systemLayout]}
            onPress={() => navigation.navigate("Home2")}
          >
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/systemuiconsbellringing.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.madwacash, styles.madwacashPosition]}
            onPress={() => navigation.navigate("Home4")}
          >
            <Text style={[styles.madwacash1, styles.keluarTypo]}>
              Madwacash
            </Text>
          </Pressable>
          <Pressable
            style={[styles.lightInner, styles.lightInnerLayout]}
            onPress={() => navigation.navigate("Home4")}
          />
          <Text style={[styles.rp650, styles.rp650Clr]}>Rp. 650</Text>
          <Pressable
            style={[styles.systemUiconsgraphIncrease, styles.systemLayout]}
            onPress={() => navigation.navigate("Home3")}
          >
            <Image
              style={styles.icon2}
              contentFit="cover"
              source={require("../assets/systemuiconsgraphincrease.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.riwayatTransaksi, styles.madwacashPosition]}
            onPress={() => navigation.navigate("Home3")}
          >
            <Text style={[styles.madwacash1, styles.keluarTypo]}>
              Riwayat Transaksi
            </Text>
          </Pressable>
          <Pressable
            style={[styles.notifikasi, styles.madwacashPosition]}
            onPress={() => navigation.navigate("Home2")}
          >
            <Text style={[styles.madwacash1, styles.keluarTypo]}>
              Notifikasi
            </Text>
          </Pressable>
          <Text style={[styles.pengaturan, styles.keluarTypo]}>Pengaturan</Text>
          <View style={[styles.rectangleView, styles.lightInnerLayout]} />
          <Text style={[styles.keluar, styles.rp650Clr]}>Keluar</Text>
          <Image
            style={[styles.systemUiconsexitRight, styles.systemLayout]}
            contentFit="cover"
            source={require("../assets/systemuiconsexitright.png")}
          />
          <View style={[styles.lightChild1, styles.lightChild1Border]} />
        </View>
        <Image
          style={[styles.systemUiconshomeDoor, styles.systemLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconshomedoor.png")}
        />
        <Text style={[styles.halamanUtama, styles.keluarTypo]}>
          Halaman Utama
        </Text>
        <View style={[styles.appLogo1, styles.appLayout]}>
          <Image
            style={[styles.icon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/3426127-1.png")}
          />
        </View>
        <Text style={[styles.madwaPedia, styles.madwacashPosition]}>
          Madwa Pedia
        </Text>
      </View>
      <View style={[styles.profilePageInner, styles.lightChild1Border]} />
      <View style={[styles.profilePageChild1, styles.vectorIconLayout]} />
      <Pressable
        style={styles.systemUiconsclose}
        onPress={() => navigation.navigate("Home8")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/systemuiconsclose.png")}
        />
      </Pressable>
      <View style={[styles.spBody1Regular, styles.spBody2MediumPosition]}>
        <Text style={[styles.body1, styles.bodyLayout]}>
          fransdytoependri21@gmail.com
        </Text>
      </View>
      <View style={[styles.spBody2Medium, styles.spBody2MediumPosition]}>
        <Text style={[styles.body2, styles.bodyLayout]}>FransDytoEpendri</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileLayout: {
    width: 361,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  appLayout: {
    height: 40,
    width: 40,
    position: "absolute",
  },
  iconChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  uirShopTypo: {
    height: 25,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.header,
  },
  componentLayout: {
    height: 155,
    top: 155,
    width: 99,
    position: "absolute",
  },
  frameViewPosition: {
    top: "53.55%",
    backgroundColor: Color.colorMediumseagreen_100,
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  vectorIconLayout: {
    width: 99,
    position: "absolute",
  },
  mobileTypo: {
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
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
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  avatarPosition: {
    left: 41,
    position: "absolute",
  },
  systemLayout: {
    width: 25,
    left: 52,
    height: 25,
    position: "absolute",
  },
  madwacashPosition: {
    left: 92,
    position: "absolute",
  },
  keluarTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.header,
  },
  lightInnerLayout: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  rp650Clr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  lightChild1Border: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  spBody2MediumPosition: {
    height: 20,
    left: 91,
    right: -19,
    position: "absolute",
  },
  bodyLayout: {
    lineHeight: 18,
    height: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    color: Color.lightColor,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  profilePageChild: {
    left: -2,
    height: 46,
    top: 48,
  },
  profilePageItem: {
    height: 48,
    left: 0,
    top: 0,
  },
  systemUiconssideMenu: {
    left: 21,
    top: 48,
    overflow: "hidden",
  },
  icon: {
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  appLogo: {
    left: 71,
    top: 48,
  },
  uirShop: {
    top: 58,
    left: 121,
    color: Color.colorMediumseagreen_100,
    width: 112,
    position: "absolute",
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
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  component3Item: {
    height: "0.65%",
    width: "101.01%",
    right: "-0.51%",
    bottom: "45.81%",
    left: "-0.51%",
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: "53.55%",
    position: "absolute",
  },
  component3Inner: {
    height: "46.45%",
    backgroundColor: Color.colorMediumseagreen_100,
    borderRadius: Border.br_mini,
    bottom: "0%",
  },
  frameView: {
    height: "32.9%",
    bottom: "13.55%",
    backgroundColor: Color.colorMediumseagreen_100,
  },
  vectorIcon: {
    top: 71,
    height: 28,
    left: 0,
  },
  mobileLegends: {
    left: 23,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
    top: 99,
  },
  component3: {
    left: 8,
  },
  genshinImpact: {
    left: 24,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
    top: 99,
  },
  component4: {
    left: 129,
  },
  pubgMobile: {
    left: 29,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
    top: 99,
  },
  component2: {
    left: 250,
  },
  component5Child: {
    height: "54.84%",
    bottom: "45.16%",
    borderRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    top: "0%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  valorant: {
    left: 15,
  },
  component5: {
    left: 8,
  },
  apexLegendsMobile: {
    left: 6,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
    top: 99,
  },
  component21: {
    left: 129,
  },
  callOfDuty: {
    left: 12,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
    top: 99,
  },
  component22: {
    left: 250,
  },
  steamWalletCode: {
    left: 9,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
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
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.android13BodyMediumSemibold_size,
    fontWeight: "500",
    color: Color.lightColor,
    position: "absolute",
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
  avatar40x40Icon: {
    borderRadius: Border.br_80xl,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  avatar: {
    bottom: 605,
    width: 64,
    height: 64,
  },
  lightItem: {
    top: 179,
    borderRadius: Border.br_3xs,
    width: 233,
    height: 38,
    backgroundColor: Color.colorLightgreen,
  },
  systemUiconssettings: {
    top: 385,
    overflow: "hidden",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  systemUiconswallet: {
    left: "18.25%",
    top: "31.25%",
    right: "72.98%",
    bottom: "65.43%",
    width: "8.77%",
    height: "3.32%",
    position: "absolute",
  },
  icon2: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  systemUiconsbellRinging: {
    top: 335,
  },
  madwacash1: {
    color: Color.lightColor,
  },
  madwacash: {
    top: 240,
  },
  lightInner: {
    top: 234,
    left: 198,
    width: 67,
    height: 28,
  },
  rp650: {
    left: 214,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.biryaniRegular,
    top: 240,
    textAlign: "center",
  },
  systemUiconsgraphIncrease: {
    top: 285,
  },
  riwayatTransaksi: {
    top: 290,
  },
  notifikasi: {
    top: 340,
  },
  pengaturan: {
    top: 390,
    left: 92,
    position: "absolute",
    color: Color.lightColor,
  },
  rectangleView: {
    top: 675,
    width: 113,
    left: 40,
    height: 48,
  },
  keluar: {
    top: 691,
    left: 82,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.header,
  },
  systemUiconsexitRight: {
    top: 686,
    overflow: "hidden",
  },
  lightChild1: {
    top: 669,
    width: 230,
    left: 40,
  },
  systemUiconshomeDoor: {
    top: 185,
    overflow: "hidden",
  },
  halamanUtama: {
    top: 190,
    left: 92,
    position: "absolute",
    color: Color.lightColor,
  },
  appLogo1: {
    top: 18,
    left: 42,
  },
  madwaPedia: {
    top: 26,
    width: 153,
    color: Color.lightColor,
    height: 25,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.header,
  },
  menuModule: {
    width: "79.17%",
    top: 49,
    right: "27.5%",
    bottom: -1,
    left: "-6.67%",
    position: "absolute",
    overflow: "hidden",
  },
  profilePageInner: {
    width: 362,
    left: 0,
    top: 48,
  },
  profilePageChild1: {
    left: 261,
    backgroundColor: Color.colorGray_400,
    height: 752,
    top: 48,
  },
  systemUiconsclose: {
    left: 216,
    top: 50,
    width: 45,
    height: 44,
    position: "absolute",
  },
  body1: {
    top: 10,
    fontFamily: FontFamily.spBody1Regular,
    width: 129,
  },
  spBody1Regular: {
    bottom: 619,
  },
  body2: {
    width: 288,
    fontFamily: FontFamily.android13BodyMediumSemibold,
    fontWeight: "500",
    top: 0,
  },
  spBody2Medium: {
    bottom: 639,
  },
  profilePage: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorLightgreen,
  },
});

export default ProfilePage;
