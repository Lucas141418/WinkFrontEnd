import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ExtractFirstLetters } from "../../constants";
import AppStyles from "../../styles/AppStyles";
import FormSinpe from "./FormSinpe";

export default function SendSinpe() {
  const { id, name, phoneNumber } = useLocalSearchParams();

  const safeId = Array.isArray(id) ? id[0] : id;
  const safeName = Array.isArray(name) ? name[0] : name;
  const safePhoneNumber = Array.isArray(phoneNumber)
    ? phoneNumber[0]
    : phoneNumber;

  return (
    <View style={AppStyles.SinpeContainer}>
      <Text style={AppStyles.h3}>Transferir a</Text>

      <View style={AppStyles.SinpeUserContainer}>
        <View style={AppStyles.TransactioncontactBackground}>
          <Text style={AppStyles.TransactionInitialPreview}>
            {ExtractFirstLetters({ nameP: safeName })}
          </Text>
        </View>
        <View style={AppStyles.SinpeUserInfo}>
          <Text style={AppStyles.text}>{name}</Text>
          <Text style={AppStyles.SinpeUserNumber}>{safePhoneNumber}</Text>
        </View>
      </View>

      <FormSinpe name={safeName} id={safeId} phoneNumber={safePhoneNumber} />
    </View>
  );
}
