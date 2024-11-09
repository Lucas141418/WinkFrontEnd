import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, Pressable, Text } from "react-native";
import AppStyles from "../styles/AppStyles";

export default function ButtonSinpe() {
  return (
    <View style={AppStyles.viewButton}>
      <Link asChild href="/contactsScreen">
        <Pressable style={AppStyles.sinpeButton}>
          <Feather name="refresh-ccw" size={35} color="blue" />
        </Pressable>
      </Link>
      <Text>SINPE móvil</Text>
    </View>
  );
}
