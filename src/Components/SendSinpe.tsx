import { Text, View } from "react-native";
import AppStyles from "../styles/AppStyles";
import FormSinpe from "./FormSinpe";

export default function SendSinpe() {
  return (
    <View style={AppStyles.containerSinpe}>
      <Text style={AppStyles.h3}>Transferir a</Text>

      <View>
        <View style={AppStyles.contactPreviewC}>
          <Text style={AppStyles.contactPreviewT}>CN</Text>
        </View>
        <Text style={AppStyles.text}>Nombre</Text>
        <Text>Number</Text>
      </View>

      <FormSinpe />
    </View>
  );
}
