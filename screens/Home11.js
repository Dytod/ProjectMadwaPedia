import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Component3 from "../components/Component3";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Home11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <View style={styles.homeChild} />
      <Component3
        systemUiconssideMenu={require("../assets/systemuiconssidemenu1.png")}
        content={require("../assets/content.png")}
        systemUiconssideMenu1={require("../assets/systemuiconssidemenu1.png")}
        component3Position="absolute"
        component3Top={0}
        component3Left={0}
      />
      <View style={[styles.homeInner, styles.homeInnerPosition]} />
      <Image
        style={[styles.rectangleIcon, styles.homeInnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={styles.mobileLegends}>Mobile legends</Text>
      <Text style={styles.pilihMetodePembayaran}>Pilih Metode Pembayaran</Text>
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
      <Pressable
        style={[styles.rectanglePressable, styles.homeChild13Layout]}
        onPress={() => navigation.navigate("Home10")}
      />
      <Image
        style={[styles.homeChild6, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={[styles.homeChild7, styles.homeChildLayout3]} />
      <Image
        style={[styles.homeChild8, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={[styles.homeChild9, styles.homeChildLayout3]} />
      <Image
        style={[styles.homeChild10, styles.homeChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-232.png")}
      />
      <View style={[styles.homeChild11, styles.homeChildLayout2]} />
      <Image
        style={styles.homeChild12}
        contentFit="cover"
        source={require("../assets/rectangle-251.png")}
      />
      <View style={[styles.homeChild13, styles.homeChild13Layout]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.homeChild14, styles.homeChildLayout]} />
      <View style={[styles.homeChild15, styles.homeChildLayout]} />
      <View style={[styles.homeChild16, styles.homeChildLayout]} />
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
        style={[styles.ebaed20dc6155d99946411a8721f1dIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/1081027ebaed20dc6155d99946411a8721f1de6224d0b646a5c767072dfb1afb-1.png")}
      />
      <Image
        style={styles.logoDanaBlue1Icon}
        contentFit="cover"
        source={require("../assets/logo-dana-blue-1.png")}
      />
      <Image
        style={styles.logoOvoPurple1Icon}
        contentFit="cover"
        source={require("../assets/logo-ovo-purple-1.png")}
      />
      <Image
        style={[styles.qrisLogo1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/qris-logo-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeInnerPosition: {
    left: 0,
    position: "absolute",
  },
  homeChildLayout3: {
    height: 51,
    width: 308,
    left: 26,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  rp22000Typo: {
    height: 9,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
    left: 260,
    width: 60,
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
  homeChild13Layout: {
    left: 25,
    height: 51,
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
  iconLayout: {
    height: 24,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
    left: 0,
    position: "absolute",
  },
  homeInner: {
    top: 48,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
  },
  rectangleIcon: {
    top: 95,
    width: 360,
    height: 170,
  },
  mobileLegends: {
    top: 232,
    left: 68,
    fontSize: FontSize.header_size,
    fontFamily: FontFamily.header,
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  pilihMetodePembayaran: {
    top: 275,
    left: 46,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  rectangleView: {
    top: 303,
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
  rectanglePressable: {
    top: 484,
  },
  homeChild6: {
    top: 491,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 37,
  },
  homeChild7: {
    top: 545,
  },
  homeChild8: {
    top: 552,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 37,
  },
  homeChild9: {
    top: 607,
  },
  homeChild10: {
    top: 614,
    borderRadius: Border.br_lg_5,
  },
  homeChild11: {
    top: 669,
  },
  homeChild12: {
    top: 682,
    width: 86,
    height: 25,
    left: 49,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  homeChild13: {
    top: 731,
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
  homeChild14: {
    top: 489,
  },
  homeChild15: {
    top: 550,
  },
  homeChild16: {
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
    left: 95,
  },
  logoDanaBlue1Icon: {
    top: 559,
    width: 75,
    height: 22,
    left: 95,
    position: "absolute",
  },
  logoOvoPurple1Icon: {
    top: 624,
    height: 19,
    left: 95,
    width: 60,
    position: "absolute",
  },
  qrisLogo1Icon: {
    top: 744,
    left: 43,
    width: 150,
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

export default Home11;
