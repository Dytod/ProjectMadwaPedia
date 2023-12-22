import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailInput = memo(({ emailAddress, userEmail, propTop }) => {
  const inputTextStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.inputtext, inputTextStyle]}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <Text style={[styles.fransdyto21gmailcom, styles.alamatEMailPosition]}>
        {emailAddress}
      </Text>
      <Text style={[styles.alamatEMail, styles.alamatEMailPosition]}>
        {userEmail}
      </Text>
      <Text style={[styles.show, styles.showTypo]}>Show</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  alamatEMailPosition: {
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
  fransdyto21gmailcom: {
    left: 16,
    color: Color.colorBlack,
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

export default EmailInput;
