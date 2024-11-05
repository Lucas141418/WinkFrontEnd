import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableHighlight } from "react-native";
import AppStyles from "./styles/AppStyles";
import icon from "./assets/WINK.png";

export default function App() {
  return (
    <View style={AppStyles.container}>
      <Image source={icon} style={AppStyles.logo} />
      <View style={AppStyles.containerBalance}>
        <Text style={AppStyles.h1}>Cuenta Colones</Text>
        <Text style={AppStyles.subText}>Saldo disponible</Text>
        <Text style={AppStyles.currentBalance}>₡6,850.00</Text>
        <Text style={AppStyles.subText}> ¿Qué querés hacer?</Text>
        <TouchableHighlight style={AppStyles.sinpeButton}>
          <Text>Sinpe</Text>
        </TouchableHighlight>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
