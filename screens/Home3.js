import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import AutoTintTruePrivacyChip from "../components/AutoTintTruePrivacyChip";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home3 = () => {
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
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu3.png")}
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
        <Text style={[styles.uirShop1, styles.rp19880FlexBox1]}>UIR SHOP</Text>
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
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/systemuiconssidemenu3.png")}
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
      <Text style={[styles.madwaPedia, styles.rp19880FlexBox1]}>
        Madwa Pedia
      </Text>
      <Image
        style={[styles.vectorIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <View style={[styles.rectangleView, styles.icon1Position]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={styles.homeChild1} />
      <Text style={[styles.text, styles.textTypo3]}>
        ------------------------------------------------------------------
      </Text>
      <Text style={[styles.text1, styles.textTypo1]}>:</Text>
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={[styles.historyTransaksi, styles.rp19880FlexBox]}>
        History Transaksi
      </Text>
      <Text style={[styles.mobileLegends, styles.rp19880FlexBox]}>
        Mobile Legends
      </Text>
      <Text style={[styles.idPemesanan, styles.pemesananTypo]}>
        Id pemesanan
      </Text>
      <Text style={[styles.idTransaksi, styles.text2Position]}>
        ID transaksi
      </Text>
      <Text
        style={[styles.barangYangDibeli, styles.pemesananTypo]}
      >{`Barang yang 
dibeli`}</Text>
      <Text style={[styles.tanggalPemesanan, styles.pemesananTypo]}>{`Tanggal
pemesanan`}</Text>
      <Text style={[styles.caraPembayaran, styles.text5Position]}>
        Cara Pembayaran
      </Text>
      <Text style={[styles.statusPembayaran, styles.pemesananTypo]}>{`Status 
pembayaran`}</Text>
      <Text style={[styles.text2, styles.text2Position]}>:</Text>
      <Text style={[styles.text3, styles.textTypo1]}>:</Text>
      <Text style={[styles.text4, styles.textTypo1]}>:</Text>
      <Text style={[styles.text5, styles.text5Position]}>:</Text>
      <Text style={[styles.text6, styles.textTypo1]}>:</Text>
      <Text style={[styles.text7, styles.textTypo]}>6501106568691104790</Text>
      <Text style={[styles.text8, styles.textTypo]}>6501106568751035772</Text>
      <Text style={[styles.diamonds, styles.textTypo]}>77 + 8 Diamonds</Text>
      <Text style={[styles.jan2023154930, styles.textTypo]}>
        06 Jan 2023 15:49:30
      </Text>
      <Text style={[styles.shopeepay, styles.textTypo]}>ShopeePay</Text>
      <View style={styles.homeChild2} />
      <Text style={[styles.successful, styles.textTypo]}>Successful</Text>
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
      <Text style={styles.totalPembayaran}>Total Pembayaran</Text>
      <Text style={[styles.rp19880, styles.rp19880FlexBox]}>Rp. 19.880</Text>
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
  rp19880FlexBox1: {
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
  },
  lineViewLayout: {
    width: "100.56%",
    position: "absolute",
  },
  textTypo3: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  textTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 163,
  },
  rp19880FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  pemesananTypo: {
    fontFamily: FontFamily.montserratRegular,
    left: 43,
  },
  text2Position: {
    top: 246,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text5Position: {
    top: 372,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    left: 177,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
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
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    height: "3.13%",
    display: "flex",
    fontSize: FontSize.size_xl,
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
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    height: "3.13%",
    display: "flex",
    fontSize: FontSize.size_xl,
    top: "7.25%",
    position: "absolute",
  },
  vectorIcon: {
    top: 511,
    width: 460,
    height: 214,
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
    top: 158,
    left: 28,
    borderRadius: Border.br_3xs,
    width: 309,
    height: 379,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  text: {
    top: 467,
    left: 53,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
    top: 214,
  },
  vectorIcon1: {
    top: 585,
    left: -2,
    width: 363,
    height: 215,
    position: "absolute",
  },
  historyTransaksi: {
    top: 112,
    left: 25,
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.lightColor,
  },
  mobileLegends: {
    top: 170,
    left: 41,
    fontSize: FontSize.uI16Medium_size,
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  idPemesanan: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
    top: 214,
  },
  idTransaksi: {
    fontFamily: FontFamily.montserratRegular,
    left: 43,
  },
  barangYangDibeli: {
    top: 278,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  tanggalPemesanan: {
    top: 325,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  caraPembayaran: {
    fontFamily: FontFamily.montserratRegular,
    left: 43,
  },
  statusPembayaran: {
    top: 404,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text2: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 163,
  },
  text3: {
    top: 285,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text4: {
    top: 330,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text5: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 163,
  },
  text6: {
    top: 412,
    width: 2,
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text7: {
    top: 217,
    color: Color.colorBlack,
  },
  text8: {
    top: 249,
    color: Color.colorBlack,
  },
  diamonds: {
    top: 287,
    color: Color.colorBlack,
  },
  jan2023154930: {
    top: 332,
    color: Color.colorBlack,
  },
  shopeepay: {
    top: 374,
    color: Color.colorBlack,
  },
  homeChild2: {
    top: 409,
    left: 171,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorMediumseagreen_100,
    width: 67,
    height: 22,
    position: "absolute",
  },
  successful: {
    top: 414,
    color: Color.lightColor,
  },
  totalPembayaran: {
    top: 493,
    fontSize: FontSize.size_mini,
    left: 43,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
  },
  rp19880: {
    top: 480,
    left: 212,
    color: Color.colorDarkolivegreen,
    justifyContent: "center",
    width: 109,
    height: 44,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    textAlign: "center",
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

export default Home3;
