import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Component3 from "../components/Component3";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Home7 = () => {
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
      <View style={[styles.homeInner, styles.lineViewLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.homeChild18Position]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={styles.mobileLegends}>Mobile legends</Text>
      <Text style={styles.pilihMetodePembayaran}>Pilih Metode Pembayaran</Text>
      <View style={[styles.rectangleView, styles.homeChildLayout5]} />
      <Text style={[styles.rp22000, styles.rp22000Typo]}>Rp. 22.000</Text>
      <Image
        style={[styles.homeChild1, styles.homeChildLayout4]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <View style={[styles.homeChild2, styles.homeChildLayout5]} />
      <Image
        style={[styles.homeChild3, styles.homeChildLayout4]}
        contentFit="cover"
        source={require("../assets/rectangle-231.png")}
      />
      <View style={[styles.homeChild4, styles.homeChildLayout3]} />
      <Image
        style={styles.homeChild5}
        contentFit="cover"
        source={require("../assets/rectangle-25.png")}
      />
      <View style={[styles.homeChild6, styles.homeChildPosition]} />
      <Image
        style={[styles.homeChild7, styles.homeChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <View style={[styles.homeChild8, styles.homeChildLayout5]} />
      <Image
        style={[styles.homeChild9, styles.homeChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={[styles.homeChild10, styles.homeChildLayout5]} />
      <Image
        style={[styles.homeChild11, styles.homeChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-232.png")}
      />
      <View style={[styles.homeChild12, styles.homeChildLayout3]} />
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
      <View style={[styles.homeChild15, styles.homeChildLayout1]} />
      <View style={[styles.homeChild16, styles.homeChildLayout1]} />
      <View style={[styles.homeChild17, styles.homeChildLayout1]} />
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
        style={[styles.logoOvoPurple1Icon, styles.homeChild22Layout]}
        contentFit="cover"
        source={require("../assets/logo-ovo-purple-1.png")}
      />
      <Image
        style={[styles.qrisLogo1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/qris-logo-11.png")}
      />
      <View style={[styles.homeChild18, styles.homeChild18Position]} />
      <View style={[styles.homeChild19, styles.homeChildLayout]} />
      <View style={[styles.homeChild20, styles.homeChildLayout]} />
      <View style={[styles.homeChild21, styles.homeChildPosition]} />
      <Text style={styles.detailPesanan}>Detail Pesanan</Text>
      <Text style={styles.mohonKonfirmasiNickname}>
        Mohon konfirmasi nickname in-game anda sudah benar.
      </Text>
      <Text style={[styles.nicknameInGame, styles.hargaRpTypo]}>
        Nickname in-game : F+r+n+x+x.
      </Text>
      <Text style={[styles.id104539638, styles.hargaRpTypo]}>
        ID : 104539638 (2532)
      </Text>
      <Text style={[styles.hargaRp, styles.hargaRpTypo]}>
        Harga : Rp. 19.880
      </Text>
      <Text style={[styles.bayarDengan, styles.hargaRpTypo]}>
        Bayar dengan : ShopeePay
      </Text>
      <View style={[styles.lineView, styles.homeChildPosition]} />
      <View style={[styles.homeChild22, styles.homeChild22Layout]} />
      <Pressable
        style={[styles.konfirmasi, styles.batalkanPosition]}
        onPress={() => navigation.navigate("Home6")}
      >
        <Text style={[styles.konfirmasi1, styles.hargaRpTypo]}>Konfirmasi</Text>
      </Pressable>
      <Pressable
        style={[styles.batalkan, styles.batalkanPosition]}
        onPress={() => navigation.navigate("Home10")}
      >
        <Text style={[styles.batalkan1, styles.hargaRpTypo]}>Batalkan</Text>
      </Pressable>
      <View style={styles.homeChild23} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineViewLayout: {
    borderTopWidth: 1,
    borderStyle: "solid",
    height: 1,
  },
  homeChild18Position: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  homeChildLayout5: {
    height: 51,
    width: 308,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightColor,
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
  homeChildLayout4: {
    height: 33,
    width: 100,
    left: 39,
    position: "absolute",
  },
  homeChildLayout3: {
    backgroundColor: Color.colorSilver,
    left: 25,
    height: 51,
    width: 308,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildPosition: {
    left: 25,
    position: "absolute",
  },
  homeChildLayout2: {
    height: 37,
    width: 37,
    left: 49,
    position: "absolute",
  },
  homeChildLayout1: {
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
  homeChild22Layout: {
    height: 19,
    position: "absolute",
  },
  homeChildLayout: {
    borderRadius: Border.br_mini,
    left: 25,
    width: 308,
    position: "absolute",
  },
  hargaRpTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  batalkanPosition: {
    top: 411,
    position: "absolute",
  },
  homeChild: {
    width: 361,
    height: 48,
    backgroundColor: Color.lightColor,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeInner: {
    top: 48,
    borderColor: Color.colorBlack,
    width: 362,
    height: 1,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleIcon: {
    top: 95,
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
    left: 26,
    height: 51,
    position: "absolute",
  },
  rp22000: {
    top: 324,
  },
  homeChild1: {
    top: 312,
    borderRadius: Border.br_9xs,
  },
  homeChild2: {
    top: 365,
    left: 26,
    height: 51,
    position: "absolute",
  },
  homeChild3: {
    top: 370,
    borderRadius: Border.br_8xs,
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
    width: 308,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightColor,
  },
  homeChild7: {
    top: 491,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 37,
  },
  homeChild8: {
    top: 545,
    left: 26,
    height: 51,
    position: "absolute",
  },
  homeChild9: {
    top: 552,
    borderRadius: Border.br_3xs,
    height: 37,
    width: 37,
  },
  homeChild10: {
    top: 607,
    left: 26,
    height: 51,
    position: "absolute",
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
    height: 51,
    width: 308,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lightColor,
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
    left: 95,
    width: 60,
    height: 19,
  },
  qrisLogo1Icon: {
    top: 744,
    left: 43,
    width: 150,
  },
  homeChild18: {
    backgroundColor: Color.colorGray_400,
    top: 0,
    width: 360,
    height: 800,
  },
  homeChild19: {
    top: 282,
    backgroundColor: Color.colorGainsboro,
    height: 153,
  },
  homeChild20: {
    top: 281,
    height: 35,
    backgroundColor: Color.colorLightgreen,
    borderRadius: Border.br_mini,
  },
  homeChild21: {
    top: 301,
    height: 15,
    width: 308,
    left: 25,
    backgroundColor: Color.colorLightgreen,
  },
  detailPesanan: {
    top: 291,
    fontSize: FontSize.size_xs,
    left: 35,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  mohonKonfirmasiNickname: {
    top: 319,
    fontStyle: "italic",
    fontFamily: FontFamily.montserratItalic,
    color: Color.colorGray_300,
    fontSize: FontSize.size_5xs,
    left: 35,
    textAlign: "left",
    position: "absolute",
  },
  nicknameInGame: {
    top: 339,
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    color: Color.colorGray_300,
    left: 35,
    position: "absolute",
  },
  id104539638: {
    top: 352,
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    color: Color.colorGray_300,
    left: 35,
    position: "absolute",
  },
  hargaRp: {
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    color: Color.colorGray_300,
    left: 35,
    position: "absolute",
    top: 365,
  },
  bayarDengan: {
    top: 378,
    fontSize: FontSize.size_4xs,
    fontWeight: "500",
    color: Color.colorGray_300,
    left: 35,
    position: "absolute",
  },
  lineView: {
    top: 401,
    borderColor: Color.colorGray_100,
    width: 309,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  homeChild22: {
    top: 407,
    left: 254,
    backgroundColor: Color.colorDodgerblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 63,
    borderRadius: Border.br_8xs,
  },
  konfirmasi1: {
    color: Color.colorWhitesmoke,
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
  },
  konfirmasi: {
    left: 264,
  },
  batalkan1: {
    color: "#009841",
    fontWeight: "500",
    fontSize: FontSize.size_5xs,
  },
  batalkan: {
    left: 204,
  },
  homeChild23: {
    top: 419,
    left: 205,
    backgroundColor: "#00622a",
    width: 35,
    height: 1,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorLightgreen,
  },
});

export default Home7;
