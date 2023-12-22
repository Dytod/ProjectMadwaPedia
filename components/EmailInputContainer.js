import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailInputContainer = memo(
  ({ inputPlaceholder, inputLabel, propTop, onInputTextPress }) => {
    const inputText1Style = useMemo(() => {
      return {
        ...getStyleValue("top", propTop),
      };
    }, [propTop]);

    return (
      <Pressable
        style={[styles.inputtext, inputText1Style]}
        onPress={onInputTextPress}
      >
        <Image
          style={styles.bgIcon}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <Text style={[styles.emailAndaDi, styles.emailAndaDiPosition]}>
          {inputPlaceholder}
        </Text>
        <Text style={[styles.alamatEMail, styles.emailAndaDiPosition]}>
          {inputLabel}
        </Text>
        <Text style={[styles.show, styles.showTypo]}>Show</Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  emailAndaDiPosition: {
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  showTypo: {
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    marginTop: -9,
  },
  bgIcon: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  emailAndaDi: {
    left: 16,
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.uI16Medium,
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    marginTop: -9,
    textAlign: "left",
  },
  alamatEMail: {
    marginTop: -52,
    left: 12,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.header,
    color: Color.lightColor,
  },
  show: {
    right: 16,
    color: Color.greenPrimary,
    textAlign: "right",
    display: "none",
    top: "50%",
    fontWeight: "500",
    fontSize: FontSize.uI16Medium_size,
    marginTop: -9,
    position: "absolute",
  },
  inputtext: {
    top: 199,
    right: 8,
    left: 9,
    height: 50,
    position: "absolute",
  },
});

export default EmailInputContainer;
