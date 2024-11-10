import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import AppStyles from "../styles/AppStyles";

export default function Header({ textHeader }: { textHeader: string }) {
  return (
    <View style={AppStyles.header}>
      <Link asChild href="/" style={AppStyles.headerBackButton}>
        <Pressable>
          <AntDesign name="arrowleft" size={35} color="blue" />
        </Pressable>
      </Link>
      <Text style={AppStyles.headerText}>{textHeader}</Text>
    </View>
  );
}
