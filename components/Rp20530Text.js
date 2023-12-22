import React, { memo } from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Rp20530Text = memo(() => {
  return <Text style={styles.rp20530}>Rp. 20.530</Text>;
});

const styles = StyleSheet.create({
  rp20530: {
    fontSize: FontSize.size_2xs,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "center",
    width: 94,
    height: 11,
  },
});

export default Rp20530Text;
