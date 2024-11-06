import { ReactNode } from "react";
import { View } from "react-native";

export default function Screen({children}: {children: ReactNode}) {
  return <View>{children}</View>;
}
