import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Component3 from "../components/Component3";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <View style={styles.homeItem} />
      <Component3
        systemUiconssideMenu={require("../assets/systemuiconssidemenu1.png")}
        content={require("../assets/content.png")}
        systemUiconssideMenu1={require("../assets/systemuiconssidemenu1.png")}
        component3Position="absolute"
        component3Top={0}
        component3Left={0}
      />
      <View style={styles.homeInner} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={styles.mobileLegends}>Mobile legends</Text>
      <View style={styles.rectangleView} />
      <Text style={styles.terimaKasihUntuk}>{`TERIMA KASIH UNTUK 
PEMBELIAN ANDA`}</Text>
      <Text
        style={[styles.diamondsTelahDitambahkan, styles.pembayaranTypo]}
      >{`Diamonds telah ditambahkan ke akun Mobile Legends anda.
jika masih belum masuk, mohon re-login dan cek kembali
jika anda memiliki pertanyaan, silahkan hubungi Customer
Service kami di support@uirpayment.com`}</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Text style={styles.ringkasanPesanan}>Ringkasan Pesanan</Text>
      <Text style={styles.xMobileLegends}>
        1 x Mobile Legends 77 + 8 Diamonds
      </Text>
      <Text style={[styles.metodePembayaran, styles.pembayaranTypo]}>
        Metode Pembayaran :
      </Text>
      <Text style={[styles.statusPembayaran, styles.pembayaranTypo]}>
        Status Pembayaran :
      </Text>
      <Text style={[styles.totalPembayaran, styles.pembayaranTypo]}>
        Total Pembayaran :
      </Text>
      <Text style={[styles.shopeepay, styles.rp19880Typo]}>ShopeePay</Text>
      <Text style={[styles.pembayaranBerhasil, styles.rp19880Typo]}>
        Pembayaran Berhasil
      </Text>
      <Text style={[styles.rp19880, styles.rp19880Typo]}>Rp. 19.880</Text>
      <View style={[styles.homeChild1, styles.lineViewLayout]} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("Home5")}
      />
      <Text style={styles.lakukanPembelianLain}>Lakukan Pembelian Lain</Text>
      <Text
        style={[styles.topUpNya, styles.topUpNyaTypo]}
      >{`Top Up nya jangan pakai
uang SKS ya ganteng`}</Text>
      <Text style={[styles.cuaakkksss, styles.topUpNyaTypo]}>
        CUAAKKKSSS!!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pembayaranTypo: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    left: 38,
    textAlign: "left",
    position: "absolute",
  },
  lineViewLayout: {
    width: 323,
    borderColor: Color.colorGray_100,
    left: 17,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  rp19880Typo: {
    left: 191,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.colorDimgray,
    fontSize: FontSize.size_4xs,
    textAlign: "left",
    position: "absolute",
  },
  topUpNyaTypo: {
    color: Color.colorGray_500,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homeChild: {
    height: 48,
    width: 361,
    top: 0,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorLightgreen,
  },
  homeItem: {
    backgroundColor: Color.lightColor,
    height: 48,
    width: 361,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeInner: {
    top: 48,
    borderColor: Color.colorBlack,
    width: 362,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 95,
    width: 360,
    height: 170,
    left: 0,
    position: "absolute",
  },
  mobileLegends: {
    top: 231,
    left: 69,
    fontSize: FontSize.header_size,
    fontFamily: FontFamily.header,
    color: Color.lightColor,
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    top: 338,
    borderRadius: Border.br_5xs,
    width: 322,
    height: 280,
    left: 17,
    backgroundColor: Color.lightColor,
    position: "absolute",
  },
  terimaKasihUntuk: {
    top: 343,
    left: 60,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  diamondsTelahDitambahkan: {
    top: 400,
  },
  lineView: {
    top: 451,
  },
  ringkasanPesanan: {
    top: 467,
    fontSize: FontSize.size_mini,
    left: 38,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  xMobileLegends: {
    top: 494,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.colorDimgray,
    fontSize: FontSize.size_4xs,
    left: 38,
    textAlign: "left",
    position: "absolute",
  },
  metodePembayaran: {
    top: 512,
  },
  statusPembayaran: {
    top: 526,
  },
  totalPembayaran: {
    top: 540,
  },
  shopeepay: {
    top: 512,
  },
  pembayaranBerhasil: {
    top: 526,
  },
  rp19880: {
    top: 540,
  },
  homeChild1: {
    top: 573,
  },
  rectanglePressable: {
    top: 585,
    left: 197,
    borderRadius: 3,
    backgroundColor: Color.colorDodgerblue,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 120,
    height: 19,
    position: "absolute",
  },
  lakukanPembelianLain: {
    top: 590,
    left: 207,
    fontSize: FontSize.size_5xs,
    color: Color.colorWhitesmoke,
    width: 110,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  topUpNya: {
    top: 661,
    left: 51,
    width: 254,
    height: 47,
  },
  cuaakkksss: {
    top: 725,
    left: 97,
    width: 159,
    height: 23,
  },
  home: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorLightgreen,
  },
});

export default Home6;
