import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AutoTintTruePrivacyChip = memo(
  ({
    imageDimensions,
    autoTintTruePrivacyChipPosition,
    autoTintTruePrivacyChipTop,
    autoTintTruePrivacyChipLeft,
    autoTintTruePrivacyChipWidth,
    autoTintTruePrivacyChipHeight,
    autoTintTruePrivacyChipRight,
    autoTintTruePrivacyChipBottom,
    onStatusBarPress,
  }) => {
    const autoTintTruePrivacyChipStyle = useMemo(() => {
      return {
        ...getStyleValue("position", autoTintTruePrivacyChipPosition),
        ...getStyleValue("top", autoTintTruePrivacyChipTop),
        ...getStyleValue("left", autoTintTruePrivacyChipLeft),
        ...getStyleValue("width", autoTintTruePrivacyChipWidth),
        ...getStyleValue("height", autoTintTruePrivacyChipHeight),
        ...getStyleValue("right", autoTintTruePrivacyChipRight),
        ...getStyleValue("bottom", autoTintTruePrivacyChipBottom),
      };
    }, [
      autoTintTruePrivacyChipPosition,
      autoTintTruePrivacyChipTop,
      autoTintTruePrivacyChipLeft,
      autoTintTruePrivacyChipWidth,
      autoTintTruePrivacyChipHeight,
      autoTintTruePrivacyChipRight,
      autoTintTruePrivacyChipBottom,
    ]);

    return (
      <View
        style={[styles.autoTinttruePrivacyChip, autoTintTruePrivacyChipStyle]}
        onPress={onStatusBarPress}
      >
        <Image
          style={styles.contentIcon}
          contentFit="cover"
          source={imageDimensions}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  contentIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    height: 24,
    width: "100%",
  },
  autoTinttruePrivacyChip: {
    width: 360,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
  },
});

export default AutoTintTruePrivacyChip;
