import React, { useEffect, useState } from "react";
import Animated, {
  PinwheelIn,
  PinwheelOut,
  runOnJS,
  StretchInY,
  StretchOutY,
} from "react-native-reanimated";
import { View, TextProps } from "react-native";
import AnimationStyle from "./AnimationStyle";

type WinkAnimationProps = TextProps & {
  stagger?: number;
  onEnterFinish?: () => void;
  onExitFinish?: () => void;
};

export default function WinkAnimation({
  stagger = 250,
  onEnterFinish,
  onExitFinish,
  ...rest
}: WinkAnimationProps) {
  const [outer, setOuter] = useState<boolean>(true);
  const [inner, setInner] = useState<boolean>(true);
  const letters = "WINK".split("");
  const duration = 3500;

  useEffect(() => {
    if (outer) {
      const timer = setTimeout(() => {
        setInner(false);
      }, duration);
      const timer2 = setTimeout(() => {
        setOuter(false);
      }, duration * 2);

      return () => {
        clearTimeout(timer);
        clearTimeout(timer2);
      };
    }
  }, [outer]);

  useEffect(() => {
    console.log("The animation was render ");
  }, []);

  return (
    <View style={AnimationStyle.container}>
      {outer && (
        <Animated.View
          entering={PinwheelIn}
          exiting={PinwheelOut}
          style={AnimationStyle.Box}
        >
          {inner && (
            <View style={AnimationStyle.LetterContainer}>
              {letters.map((letter, index) => (
                <View
                  style={AnimationStyle.letterContainerInside}
                  key={`letter-${letter}--index-${index}`}
                >
                  <Animated.View>
                    <Animated.Text
                      style={AnimationStyle.WinkText} // Solo los estilos base van aquí
                      {...rest}
                      entering={StretchInY.springify()
                        .damping(15)
                        .stiffness(150)
                        .delay(index * stagger)
                        .withCallback(() => {
                          if (index === letters.length - 1 && onEnterFinish) {
                            runOnJS(onEnterFinish)();
                          }
                        })}
                      exiting={StretchOutY.springify()
                        .damping(15)
                        .stiffness(150)
                        .delay(index * stagger)
                        .withCallback(() => {
                          if (index === letters.length - 1 && onExitFinish) {
                            runOnJS(onExitFinish)();
                          }
                        })}
                    >
                      {letter}
                    </Animated.Text>
                  </Animated.View>
                </View>
              ))}
            </View>
          )}
        </Animated.View>
      )}
    </View>
  );
}
