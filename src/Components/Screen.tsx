import { ReactNode } from "react";
import { View } from "react-native";
import AppStyles from "../styles/AppStyles";

const ScreenCom = ({ children }: { children: ReactNode }) => {
  return <View style={AppStyles.container}>{children}</View>;
};

export default ScreenCom;
