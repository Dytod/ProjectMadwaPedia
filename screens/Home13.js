import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Component3 from "../components/Component3";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home13 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.home, styles.homeLayout]}>
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
      <View style={[styles.homeInner, styles.homeInnerLayout]} />
      <Text style={styles.masukkanGameId}>
        Masukkan Game ID Mobile Legends anda
      </Text>
      <Text
        style={[styles.silahkanAndaMengisi, styles.mobileLegendsFlexBox]}
      >{`Silahkan anda mengisi dengan game ID anda, contoh:
213510362 (2134)`}</Text>
      <View style={[styles.rectangleView, styles.homeChild1Layout]} />
      <View style={[styles.homeChild1, styles.homeChild1Layout]} />
      <Text style={[styles.text, styles.textTypo]}>104539638</Text>
      <Text style={[styles.text1, styles.textTypo]}>2532</Text>
      <Text style={[styles.forYou, styles.forYouTypo]}>For You</Text>
      <View style={styles.homeChild2} />
      <View style={styles.homeChild3} />
      <Text style={[styles.regular, styles.forYouTypo]}>Regular</Text>
      <View style={[styles.homeChild4, styles.homeChildLayout3]} />
      <View style={[styles.homeChild5, styles.homeChildLayout3]} />
      <View style={[styles.homeChild6, styles.homeChildLayout2]} />
      <View style={[styles.homeChild7, styles.homeChildLayout2]} />
      <View style={[styles.homeChild8, styles.homeChildLayout1]} />
      <View style={[styles.homeChild9, styles.homeChildLayout1]} />
      <View style={[styles.homeChild10, styles.homeChildLayout]} />
      <View style={[styles.homeChild11, styles.homeChildLayout]} />
      <Text style={[styles.diamonds, styles.diamondsTypo3]}>3 Diamonds</Text>
      <Text style={[styles.diamonds1, styles.diamondsTypo3]}>
        77 + 8 Diamonds
      </Text>
      <Text style={[styles.diamonds2, styles.diamondsTypo2]}>
        11 + 1 Diamonds
      </Text>
      <Text style={[styles.diamonds3, styles.diamondsTypo2]}>
        25 + 3 Diamonds
      </Text>
      <Text style={[styles.diamonds4, styles.diamondsTypo3]}>
        53 + 6 Diamonds
      </Text>
      <Text style={[styles.diamonds5, styles.diamondsTypo1]}>
        154 + 16 Diamonds
      </Text>
      <Text style={[styles.diamonds6, styles.diamondsTypo3]}>
        256 + 40 Diamonds
      </Text>
      <Text style={[styles.diamonds7, styles.diamondsTypo1]}>
        503 + 65 Diamonds
      </Text>
      <Text style={[styles.diamonds8, styles.diamondsTypo]}>
        1708 + 302 Diamonds
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.homeInnerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      />
      <Text style={[styles.mobileLegends, styles.mobileLegendsFlexBox]}>
        Mobile legends
      </Text>
      <Text style={[styles.diamonds9, styles.diamondsTypo]}>
        4003 + 827 Diamonds
      </Text>
      <Pressable
        style={styles.systemUiconsarrowRightCirc}
        onPress={() => navigation.navigate("Home11")}
      >
        <Image
          style={[styles.icon, styles.homeLayout]}
          contentFit="cover"
          source={require("../assets/systemuiconsarrowrightcircle.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.pilihNominalTopUp, styles.mobileLegendsFlexBox]}>
        Pilih Nominal Top-Up
      </Text>
      <View style={styles.fluentnumberCircle116Fill}>
        <View
          style={[
            styles.fluentnumberCircle116FillChild,
            styles.homeInnerLayout,
          ]}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    width: "100%",
    overflow: "hidden",
  },
  homeInnerLayout: {
    width: 360,
    position: "absolute",
  },
  mobileLegendsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  homeChild1Layout: {
    height: 31,
    backgroundColor: Color.colorGainsboro,
    top: 331,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    top: 340,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
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
  diamondsTypo3: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  diamondsTypo2: {
    top: 525,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  diamondsTypo1: {
    left: 205,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  diamondsTypo: {
    top: 688,
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
    left: "2.78%",
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
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 362,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  homeInner: {
    top: 264,
    backgroundColor: Color.colorMediumseagreen_100,
    height: 110,
    left: 0,
  },
  masukkanGameId: {
    top: 277,
    textAlign: "center",
    color: Color.lightColor,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    left: 41,
    position: "absolute",
  },
  silahkanAndaMengisi: {
    top: 300,
    left: 43,
    color: Color.colorLightgray_200,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  rectangleView: {
    width: 180,
    left: 41,
    backgroundColor: Color.colorGainsboro,
    top: 331,
  },
  homeChild1: {
    left: 244,
    width: 80,
  },
  text: {
    left: 104,
    color: Color.colorGray_200,
  },
  text1: {
    left: 273,
    color: Color.colorGray_200,
  },
  forYou: {
    top: 412,
  },
  homeChild2: {
    top: 437,
    height: 41,
    width: 155,
    left: 14,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  homeChild3: {
    top: 434,
    left: 186,
    backgroundColor: "#868686",
    borderColor: Color.lightColor,
    borderWidth: 3,
    width: 161,
    height: 47,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  regular: {
    top: 485,
  },
  homeChild4: {
    left: 14,
  },
  homeChild5: {
    left: 189,
  },
  homeChild6: {
    left: 14,
  },
  homeChild7: {
    left: 189,
  },
  homeChild8: {
    left: 14,
  },
  homeChild9: {
    left: 189,
  },
  homeChild10: {
    left: 15,
  },
  homeChild11: {
    left: 190,
  },
  diamonds: {
    left: 48,
    top: 451,
    fontSize: FontSize.size_2xs,
    color: Color.colorGray_200,
  },
  diamonds1: {
    left: 211,
    top: 451,
    fontSize: FontSize.size_2xs,
    color: Color.lightColor,
  },
  diamonds2: {
    left: 39,
  },
  diamonds3: {
    left: 211,
  },
  diamonds4: {
    left: 35,
    top: 579,
    color: Color.colorGray_200,
  },
  diamonds5: {
    top: 579,
  },
  diamonds6: {
    top: 631,
    left: 23,
    color: Color.colorGray_200,
  },
  diamonds7: {
    top: 634,
  },
  diamonds8: {
    left: 17,
  },
  rectangleIcon: {
    top: 94,
    height: 170,
    left: 0,
  },
  mobileLegends: {
    top: 231,
    left: 69,
    fontSize: FontSize.header_size,
    fontFamily: FontFamily.header,
    color: Color.lightColor,
  },
  diamonds9: {
    left: 189,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  systemUiconsarrowRightCirc: {
    left: 155,
    top: 731,
    width: 50,
    height: 50,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.13%",
    width: "6.94%",
    top: "45.25%",
    right: "90.28%",
    bottom: "51.63%",
  },
  pilihNominalTopUp: {
    top: 381,
    left: 46,
    color: Color.lightColor,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  fluentnumberCircle116FillChild: {
    top: 135,
    left: -19,
    height: 401,
    backgroundColor: Color.colorLightgreen,
  },
  fluentnumberCircle116Fill: {
    top: 260,
    left: 6,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "3.29%",
    width: "7.31%",
    top: "32.38%",
    right: "89.92%",
    bottom: "64.34%",
  },
  home: {
    borderRadius: Border.br_11xl,
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorLightgreen,
  },
});

export default Home13;
