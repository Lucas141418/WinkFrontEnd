import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function SendSinpe() {
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Link href="/">Home </Link>
      <Text>Esto es una prueba</Text>
    </View>
  );
}
