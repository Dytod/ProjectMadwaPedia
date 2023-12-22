import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Component3 from "../components/Component3";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeChildPosition1]} />
      <View style={[styles.homeChild, styles.homeChildPosition1]} />
      <Component3
        systemUiconssideMenu={require("../assets/systemuiconssidemenu1.png")}
        content={require("../assets/content2.png")}
        systemUiconssideMenu1={require("../assets/systemuiconssidemenu1.png")}
        component3Position="absolute"
        component3Top={0}
        component3Left={0}
      />
      <View style={[styles.homeInner, styles.homeBorder]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={[styles.mobileLegends, styles.mobileLegendsFlexBox]}>
        Mobile legends
      </Text>
      <Text style={[styles.pilihMetodePembayaran, styles.gunakanUircashTypo]}>
        Pilih Metode Pembayaran
      </Text>
      <View style={[styles.rectangleView, styles.homeChildLayout3]} />
      <Text style={[styles.rp22000, styles.rp22000Typo]}>Rp. 22.000</Text>
      <Image
        style={styles.homeChild1}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <View style={[styles.homeChild2, styles.homeChildLayout3]} />
      <Image
        style={styles.homeChild3}
        contentFit="cover"
        source={require("../assets/rectangle-231.png")}
      />
      <View style={[styles.homeChild4, styles.homeChildLayout2]} />
      <Image
        style={styles.homeChild5}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <View style={[styles.homeChild6, styles.homeChildPosition]} />
      <Image
        style={[styles.homeChild7, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={[styles.homeChild8, styles.homeChildLayout3]} />
      <Image
        style={[styles.homeChild9, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={[styles.homeChild10, styles.homeChildLayout3]} />
      <Image
        style={[styles.homeChild11, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-232.png")}
      />
      <View style={[styles.homeChild12, styles.homeChildLayout2]} />
      <Image
        style={styles.homeChild13}
        contentFit="cover"
        source={require("../assets/rectangle-251.png")}
      />
      <View style={[styles.homeChild14, styles.homeChildPosition]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.homeChild15, styles.homeChildLayout]} />
      <View style={[styles.homeChild16, styles.homeChildLayout]} />
      <View style={[styles.homeChild17, styles.homeChildLayout]} />
      <Text style={[styles.bestDeal, styles.bestTypo]}>Best Deal</Text>
      <Text style={[styles.bestDeal1, styles.bestTypo]}>Best Deal</Text>
      <Text style={[styles.bestDeal2, styles.bestTypo]}>Best Deal</Text>
      <Text style={[styles.rp220001, styles.rp22000Typo]}>Rp. 22.000</Text>
      <Text style={[styles.rp20530, styles.rp22000Typo]}>Rp. 20.530</Text>
      <Text style={[styles.rp205301, styles.rp24254Typo]}>Rp. 20.530</Text>
      <Text style={[styles.rp205302, styles.rp24254Typo]}>Rp. 20.530</Text>
      <Text style={[styles.rp24254, styles.rp24254Typo]}>Rp. 24.254</Text>
      <Text style={[styles.pembayaranTidakTersedia, styles.pembayaranTypo]}>
        Pembayaran Tidak Tersedia
      </Text>
      <Text style={[styles.pembayaranTidakTersedia1, styles.pembayaranTypo]}>
        Pembayaran Tidak Tersedia
      </Text>
      <Image
        style={[
          styles.ebaed20dc6155d99946411a8721f1dIcon,
          styles.logoIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/1081027ebaed20dc6155d99946411a8721f1de6224d0b646a5c767072dfb1afb-1.png")}
      />
      <Image
        style={[styles.logoDanaBlue1Icon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-dana-blue-1.png")}
      />
      <Image
        style={[styles.logoOvoPurple1Icon, styles.logoIconPosition]}
        contentFit="cover"
        source={require("../assets/logo-ovo-purple-1.png")}
      />
      <Image
        style={[styles.qrisLogo1Icon, styles.qrisLogo1IconPosition]}
        contentFit="cover"
        source={require("../assets/qris-logo-1.png")}
      />
      <View style={[styles.homeChild18, styles.homeBorder]} />
      <View style={[styles.homeChild19, styles.homeChildPosition1]} />
      <Text style={styles.rp19880}>Rp. 19.880</Text>
      <Text style={[styles.diamonds, styles.diamondsTypo]}>
        77 + 8 Diamonds
      </Text>
      <Text style={[styles.shopeepay, styles.shopeepayTypo]}>ShopeePay</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.qrisLogo1IconPosition]}
        onPress={() => navigation.navigate("Home7")}
      />
      <Text style={[styles.beliSekarang, styles.diamondsTypo]}>
        Beli Sekarang
      </Text>
      <Text style={[styles.gunakanUircash, styles.shopeepayTypo]}>
        Gunakan UirCash
      </Text>
      <Image
        style={styles.mditoggleSwitchIcon}
        contentFit="cover"
        source={require("../assets/mditoggleswitch.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeChildPosition1: {
    width: 361,
    backgroundColor: Color.lightColor,
    left: 0,
    position: "absolute",
  },
  homeBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  mobileLegendsFlexBox: {
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  gunakanUircashTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  homeChildLayout3: {
    width: 308,
    left: 26,
    height: 51,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  rp22000Typo: {
    height: 9,
    left: 260,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  homeChildLayout2: {
    backgroundColor: Color.colorSilver,
    left: 25,
    height: 51,
    width: 308,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildPosition: {
    left: 25,
    width: 308,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  homeChildLayout1: {
    height: 37,
    width: 37,
    left: 49,
    position: "absolute",
  },
  homeChildLayout: {
    width: 42,
    backgroundColor: Color.colorGreenyellow,
    borderRadius: Border.br_11xs,
    left: 283,
    height: 9,
    position: "absolute",
  },
  bestTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_7xs,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  rp24254Typo: {
    left: 259,
    height: 9,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  pembayaranTypo: {
    width: 108,
    fontSize: FontSize.size_3xs,
    left: 225,
    height: 9,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  logoIconPosition: {
    left: 95,
    position: "absolute",
  },
  qrisLogo1IconPosition: {
    top: 744,
    position: "absolute",
  },
  diamondsTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  shopeepayTypo: {
    height: 10,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    height: 48,
  },
  homeInner: {
    top: 48,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    left: 0,
  },
  rectangleIcon: {
    top: 95,
    width: 360,
    height: 170,
    left: 0,
    position: "absolute",
  },
  mobileLegends: {
    top: 232,
    left: 68,
    fontSize: FontSize.header_size,
    fontFamily: FontFamily.header,
  },
  pilihMetodePembayaran: {
    top: 275,
    left: 46,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  rectangleView: {
    top: 303,
    height: 51,
  },
  rp22000: {
    top: 324,
  },
  homeChild1: {
    top: 312,
    borderRadius: Border.br_9xs,
    height: 33,
    width: 100,
    left: 39,
    position: "absolute",
  },
  homeChild2: {
    top: 365,
    height: 51,
  },
  homeChild3: {
    top: 370,
    borderRadius: Border.br_8xs,
    height: 33,
    width: 100,
    left: 39,
    position: "absolute",
  },
  homeChild4: {
    top: 427,
  },
  homeChild5: {
    top: 430,
    left: 38,
    width: 95,
    height: 44,
    position: "absolute",
  },
  homeChild6: {
    top: 484,
    height: 51,
  },
  homeChild7: {
    top: 491,
    borderRadius: Border.br_3xs,
  },
  homeChild8: {
    top: 545,
    height: 51,
  },
  homeChild9: {
    top: 552,
    borderRadius: Border.br_3xs,
  },
  homeChild10: {
    top: 607,
    height: 51,
  },
  homeChild11: {
    top: 614,
    borderRadius: Border.br_lg_5,
  },
  homeChild12: {
    top: 669,
  },
  homeChild13: {
    top: 682,
    width: 86,
    height: 25,
    left: 49,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  homeChild14: {
    top: 731,
    height: 49,
  },
  vectorIcon: {
    height: "3.13%",
    width: "6.94%",
    top: "31.88%",
    right: "90.28%",
    bottom: "65%",
    left: "2.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeChild15: {
    top: 489,
  },
  homeChild16: {
    top: 550,
  },
  homeChild17: {
    top: 611,
  },
  bestDeal: {
    top: 612,
    left: 290,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_7xs,
  },
  bestDeal1: {
    top: 551,
    left: 290,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_7xs,
  },
  bestDeal2: {
    top: 490,
    left: 289,
  },
  rp220001: {
    top: 382,
  },
  rp20530: {
    top: 505,
  },
  rp205301: {
    top: 567,
  },
  rp205302: {
    top: 629,
  },
  rp24254: {
    top: 752,
  },
  pembayaranTidakTersedia: {
    top: 450,
  },
  pembayaranTidakTersedia1: {
    top: 690,
  },
  ebaed20dc6155d99946411a8721f1dIcon: {
    top: 498,
    width: 99,
    height: 24,
  },
  logoDanaBlue1Icon: {
    top: 559,
    width: 75,
    height: 22,
  },
  logoOvoPurple1Icon: {
    top: 624,
    height: 19,
    width: 60,
    left: 95,
  },
  qrisLogo1Icon: {
    left: 43,
    width: 150,
    height: 22,
  },
  homeChild18: {
    top: 483,
    left: 24,
    backgroundColor: Color.colorViolet,
    borderColor: Color.colorDarkviolet,
    borderWidth: 1,
    width: 310,
    height: 53,
    borderRadius: Border.br_3xs,
  },
  homeChild19: {
    top: 693,
    height: 107,
  },
  rp19880: {
    top: 768,
    left: -29,
    fontSize: FontSize.size_xl,
    width: 210,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  diamonds: {
    top: 707,
    left: 29,
    width: 94,
    height: 11,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  shopeepay: {
    top: 721,
    width: 63,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 39,
    height: 10,
  },
  rectanglePressable: {
    left: 182,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorDodgerblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 155,
    height: 41,
  },
  beliSekarang: {
    top: 758,
    left: 222,
    width: 77,
    height: 12,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    position: "absolute",
  },
  gunakanUircash: {
    top: 712,
    left: 176,
    width: 113,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  mditoggleSwitchIcon: {
    top: 705,
    left: 311,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  lineIcon: {
    top: 756,
    left: 63,
    width: 55,
    height: 4,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightgreen,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Home;
