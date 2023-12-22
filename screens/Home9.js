import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Component3 from "../components/Component3";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <Component3
        systemUiconssideMenu={require("../assets/systemuiconssidemenu1.png")}
        content={require("../assets/content.png")}
        systemUiconssideMenu1={require("../assets/systemuiconssidemenu1.png")}
        component3Position="absolute"
        component3Top={0}
        component3Left={0}
      />
      <View style={styles.homeItem} />
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={styles.mobileLegends}>Mobile legends</Text>
      <View style={[styles.rectangleView, styles.homeInnerPosition]} />
      <Text style={[styles.masukkanGameId, styles.masukkanGameIdTypo]}>
        Masukkan Game ID Mobile Legends anda
      </Text>
      <View style={[styles.homeChild1, styles.childLayout]} />
      <Text
        style={styles.silahkanAndaMengisi}
      >{`Silahkan anda mengisi dengan game ID anda, contoh:
213510362 (2134)`}</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.homeChild2Layout]}
        onPress={() => navigation.navigate("Home5")}
      />
      <Pressable
        style={[styles.homeChild2, styles.homeChild2Layout]}
        onPress={() => navigation.navigate("Home5")}
      />
      <Text style={[styles.silahkanMasukkanId, styles.zoneIdTypo]}>
        Silahkan Masukkan ID Anda
      </Text>
      <Text style={[styles.zoneId, styles.zoneIdTypo]}>Zone ID</Text>
      <Text style={[styles.forYou, styles.forYouTypo]}>For You</Text>
      <View style={[styles.homeChild3, styles.homeChildLayout4]} />
      <View style={[styles.homeChild4, styles.homeChildLayout4]} />
      <Text style={[styles.regular, styles.forYouTypo]}>Regular</Text>
      <View style={[styles.homeChild5, styles.homeChildLayout3]} />
      <View style={[styles.homeChild6, styles.homeChildLayout3]} />
      <View style={[styles.homeChild7, styles.homeChildLayout2]} />
      <View style={[styles.homeChild8, styles.homeChildLayout2]} />
      <View style={[styles.homeChild9, styles.homeChildLayout1]} />
      <View style={[styles.homeChild10, styles.homeChildLayout1]} />
      <View style={[styles.homeChild11, styles.homeChildLayout]} />
      <View style={[styles.homeChild12, styles.homeChildLayout]} />
      <Text style={[styles.diamonds, styles.diamondsTypo4]}>3 Diamonds</Text>
      <Text style={[styles.diamonds1, styles.diamondsTypo4]}>
        77 + 8 Diamonds
      </Text>
      <Text style={[styles.diamonds2, styles.diamondsTypo3]}>
        11 + 1 Diamonds
      </Text>
      <Text style={[styles.diamonds3, styles.diamondsTypo3]}>
        25 + 3 Diamonds
      </Text>
      <Text style={[styles.diamonds4, styles.diamonds4Position]}>
        53 + 6 Diamonds
      </Text>
      <Text style={[styles.diamonds5, styles.diamondsTypo2]}>
        154 + 16 Diamonds
      </Text>
      <Text style={[styles.diamonds6, styles.diamondsTypo1]}>
        256 + 40 Diamonds
      </Text>
      <Text style={[styles.diamonds7, styles.diamondsTypo1]}>
        503 + 65 Diamonds
      </Text>
      <Text style={[styles.diamonds8, styles.diamondsTypo]}>
        1708 + 302 Diamonds
      </Text>
      <Text style={[styles.diamonds9, styles.diamondsTypo]}>
        4003 + 827 Diamonds
      </Text>
      <View style={styles.fluentnumberCircle116Fill}>
        <View
          style={[styles.fluentnumberCircle116FillChild, styles.childLayout]}
        />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.pilihNominalTopUp, styles.diamonds4Position]}>
        Pilih Nominal Top-Up
      </Text>
      <Image
        style={styles.systemUiconsarrowRightCirc}
        contentFit="cover"
        source={require("../assets/systemuiconsarrowrightcircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeInnerPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  masukkanGameIdTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    color: Color.lightColor,
  },
  childLayout: {
    height: 401,
    width: 360,
    position: "absolute",
    backgroundColor: Color.colorLightgreen,
  },
  homeChild2Layout: {
    height: 31,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    top: 331,
    position: "absolute",
  },
  zoneIdTypo: {
    color: Color.colorGray_200,
    fontSize: FontSize.size_5xs,
    top: 341,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  forYouTypo: {
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_mini,
    left: 31,
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  homeChildLayout4: {
    height: 41,
    width: 155,
    top: 437,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildLayout3: {
    top: 510,
    height: 41,
    width: 155,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildLayout2: {
    top: 565,
    height: 41,
    width: 155,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildLayout1: {
    top: 620,
    height: 41,
    width: 155,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChildLayout: {
    top: 675,
    height: 41,
    width: 155,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  diamondsTypo4: {
    height: 12,
    fontSize: FontSize.size_2xs,
    top: 451,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  diamondsTypo3: {
    top: 525,
    height: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  diamonds4Position: {
    left: 46,
    position: "absolute",
  },
  diamondsTypo2: {
    top: 579,
    height: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  diamondsTypo1: {
    top: 634,
    height: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  diamondsTypo: {
    top: 688,
    height: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeChild: {
    top: 0,
    backgroundColor: Color.lightColor,
    width: 361,
    height: 48,
    left: 0,
    position: "absolute",
  },
  homeItem: {
    top: 48,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    left: 0,
    position: "absolute",
  },
  homeInner: {
    top: 95,
    height: 170,
  },
  mobileLegends: {
    top: 231,
    left: 69,
    fontSize: FontSize.header_size,
    fontFamily: FontFamily.header,
    textAlign: "left",
    color: Color.lightColor,
    position: "absolute",
  },
  rectangleView: {
    top: 264,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 110,
  },
  masukkanGameId: {
    top: 277,
    textAlign: "center",
    left: 41,
    position: "absolute",
  },
  homeChild1: {
    top: 399,
    left: 0,
  },
  silahkanAndaMengisi: {
    top: 300,
    left: 43,
    fontSize: FontSize.size_3xs,
    color: Color.colorLightgray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  rectanglePressable: {
    width: 180,
    left: 41,
  },
  homeChild2: {
    left: 244,
    width: 80,
  },
  silahkanMasukkanId: {
    left: 74,
    textAlign: "center",
  },
  zoneId: {
    left: 268,
    textAlign: "left",
  },
  forYou: {
    top: 412,
  },
  homeChild3: {
    left: 15,
  },
  homeChild4: {
    left: 190,
  },
  regular: {
    top: 485,
  },
  homeChild5: {
    left: 15,
  },
  homeChild6: {
    left: 190,
  },
  homeChild7: {
    left: 15,
  },
  homeChild8: {
    left: 190,
  },
  homeChild9: {
    left: 15,
  },
  homeChild10: {
    left: 190,
  },
  homeChild11: {
    left: 16,
  },
  homeChild12: {
    left: 191,
  },
  diamonds: {
    left: 59,
    width: 68,
  },
  diamonds1: {
    width: 94,
    left: 222,
  },
  diamonds2: {
    left: 50,
    width: 86,
  },
  diamonds3: {
    width: 93,
    left: 222,
  },
  diamonds4: {
    top: 579,
    height: 12,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    width: 93,
  },
  diamonds5: {
    width: 102,
    left: 216,
    position: "absolute",
  },
  diamonds6: {
    left: 40,
    width: 108,
  },
  diamonds7: {
    width: 107,
    left: 216,
  },
  diamonds8: {
    left: 34,
    width: 118,
  },
  diamonds9: {
    left: 207,
    width: 122,
  },
  fluentnumberCircle116FillChild: {
    top: 135,
    left: -19,
  },
  vectorIcon: {
    height: "75.14%",
    width: "75.14%",
    top: "12.57%",
    right: "12.29%",
    bottom: "12.29%",
    left: "12.57%",
  },
  fluentnumberCircle116Fill: {
    top: 255,
    left: 6,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "3.13%",
    width: "6.94%",
    top: "45.25%",
    right: "90.28%",
    bottom: "51.63%",
    left: "2.78%",
  },
  pilihNominalTopUp: {
    top: 381,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    color: Color.lightColor,
    textAlign: "left",
  },
  systemUiconsarrowRightCirc: {
    top: 731,
    left: 155,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
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

export default Home9;
