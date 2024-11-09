import { Text, View } from "react-native";
import AppStyles from "../styles/AppStyles";
import FormSinpe from "./FormSinpe";
import { useLocalSearchParams } from "expo-router";

export default function SendSinpe() {
  const { id, initials, name, phoneNumber } = useLocalSearchParams();

  const safeId = Array.isArray(id) ? id[0] : id;
  const safeName = Array.isArray(name) ? name[0] : name;
  const safePhoneNumber = Array.isArray(phoneNumber)
    ? phoneNumber[0]
    : phoneNumber;

  return (
    <View style={AppStyles.containerSinpe}>
      <Text style={AppStyles.h3}>Transferir a</Text>

      <View>
        <View style={AppStyles.TransactioncontactBackground}>
          <Text style={AppStyles.TransactionInitialPreview}>{initials}</Text>
        </View>
        <Text style={AppStyles.text}>{name}</Text>
        <Text>{phoneNumber}</Text>
      </View>

      <FormSinpe name={safeName} id={safeId} phoneNumber={safePhoneNumber} />
    </View>
  );
}
