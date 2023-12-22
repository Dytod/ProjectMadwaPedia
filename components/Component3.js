import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component3 = memo(
  ({
    systemUiconssideMenu,
    content,
    systemUiconssideMenu1,
    component3Position,
    component3Top,
    component3Left,
    onComponent3Press,
  }) => {
    const component3Style = useMemo(() => {
      return {
        ...getStyleValue("position", component3Position),
        ...getStyleValue("top", component3Top),
        ...getStyleValue("left", component3Left),
      };
    }, [component3Position, component3Top, component3Left]);

    return (
      <View
        style={[styles.component3, component3Style]}
        onPress={onComponent3Press}
      >
        <View style={styles.component3Child} />
        <View style={styles.component3Item} />
        <Image
          style={[styles.systemUiconssideMenu, styles.iconLayout1]}
          contentFit="cover"
          source={systemUiconssideMenu}
        />
        <View style={styles.statusBar}>
          <Image
            style={[styles.contentIcon, styles.iconLayout]}
            contentFit="cover"
            source={content}
          />
        </View>
        <View style={[styles.component3Inner, styles.rectangleViewLayout]} />
        <View style={styles.appLogo}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/3426127-1.png")}
          />
        </View>
        <Text style={[styles.uirShop, styles.uirShopTypo]}>Madwa Pedia</Text>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <Image
          style={[styles.systemUiconssideMenu, styles.iconLayout1]}
          contentFit="cover"
          source={systemUiconssideMenu1}
        />
        <View style={styles.appLogo}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/3426127-1.png")}
          />
        </View>
        <Text style={[styles.madwaPedia, styles.uirShopTypo]}>Madwa Pedia</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    position: "absolute",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rectangleViewLayout: {
    width: "99.72%",
    position: "absolute",
  },
  uirShopTypo: {
    display: "flex",
    textAlign: "left",
    color: Color.colorMediumseagreen_100,
    fontFamily: FontFamily.header,
    fontSize: FontSize.size_xl,
    left: "33.88%",
    top: "61.7%",
    height: "26.6%",
    alignItems: "center",
    position: "absolute",
  },
  component3Child: {
    right: "0.55%",
    backgroundColor: Color.lightColor,
    left: "0%",
    bottom: "0%",
    top: "51.06%",
    width: "99.45%",
    height: "48.94%",
    position: "absolute",
  },
  component3Item: {
    left: "0.55%",
    bottom: "48.94%",
    height: "51.06%",
    right: "0%",
    top: "0%",
    backgroundColor: Color.lightColor,
    width: "99.45%",
    position: "absolute",
  },
  systemUiconssideMenu: {
    right: "82.64%",
    left: "6.34%",
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    bottom: "6.38%",
    width: "11.02%",
    height: "42.55%",
    top: "51.06%",
  },
  contentIcon: {
    alignSelf: "stretch",
    height: 24,
  },
  statusBar: {
    width: "99.17%",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
    alignItems: "center",
    right: "0.28%",
    left: "0.55%",
    bottom: "48.94%",
    top: "0%",
    height: "51.06%",
    position: "absolute",
  },
  component3Inner: {
    height: "1.06%",
    top: "50.53%",
    right: "-0.14%",
    bottom: "48.4%",
    left: "0.41%",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    position: "absolute",
    right: "0%",
    top: "0%",
    width: "100%",
    left: "0%",
    bottom: "0%",
  },
  appLogo: {
    right: "68.87%",
    left: "20.11%",
    bottom: "6.38%",
    width: "11.02%",
    height: "42.55%",
    top: "51.06%",
    position: "absolute",
  },
  uirShop: {
    width: "30.85%",
  },
  rectangleView: {
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.lightColor,
    left: "0%",
    bottom: "0%",
    top: "51.06%",
    height: "48.94%",
  },
  madwaPedia: {
    width: "44.08%",
  },
  component3: {
    width: 363,
    height: 94,
  },
});

export default Component3;
