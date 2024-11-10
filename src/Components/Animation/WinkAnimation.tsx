/* eslint-disable react-native/no-raw-text */
/* eslint-disable react-native/no-single-element-style-arrays */
/* eslint-disable react-native/no-unused-styles */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
/* eslint-disable import/export */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-color-literals */
import React, { useEffect, useState } from "react";
import Animated, {
  PinwheelIn,
  PinwheelOut,
  runOnJS,
  StretchInY,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { View, StyleSheet, TextProps, Easing } from "react-native";

type WinkAnimationProps = TextProps & {
  stagger?: number;
  onEnterFinish: () => void;
  onExitFinish: () => void;
};

export default function WinkAnimation({
  stagger = 100,
  onEnterFinish,
  onExitFinish,
  ...rest
}: WinkAnimationProps) {
  const [outer, setOuter] = useState<boolean>(true);
  const [inner, setInner] = useState<boolean>(true);
  const letters = "WINK".split("");
  const sv = useSharedValue<number>(0);


  return (
    <View style={styles.container}>
      {outer && (
        <Animated.View
          entering={PinwheelIn}
          exiting={PinwheelOut}
          style={styles.Box}
        >
          {inner && (
            <Animated.View
              style={styles.FaceContainer}
              entering={PinwheelIn}
              exiting={PinwheelOut}
            >
              <View style={styles.LetterContainer}>
                {letters.map((letter, index) => (
                  <View
                    style={styles.letterContainerInside}
                    key={`letter-${index}`}
                  >
                    <Animated.Text
                      style={styles.WinkText}
                      {...rest}
                      entering={StretchInY.springify()
                        .damping(15)
                        .stiffness(150)
                        .delay(index * stagger)
                        .withCallback(() => {
                          if (index === letters.length - 1 && onEnterFinish) {
                            // setInner(false);
                            runOnJS(onEnterFinish)();
                          }
                        })}
                      exiting={StretchInY.springify()
                        .damping(15)
                        .stiffness(150)
                        .delay(index * stagger)
                        .withCallback(() => {
                          if (index === letters.length - 1 && onExitFinish) {
                            // setInner(false);
                            runOnJS(onExitFinish)();
                          }
                        })}
                    >
                      {letter}
                    </Animated.Text>
                  </View>
                ))}
              </View>
            </Animated.View>
          )}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: 400,
  },
  Box: {
    width: 120,
    height: 120,
    backgroundColor: "#4c51f7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 20,
    position: "relative",
  },
  LetterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  WinkText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  FaceContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  letterContainerInside: {},
});
