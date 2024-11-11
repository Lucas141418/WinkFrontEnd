import { Link } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { Contact } from "../../types";
import { ExtractFirstLetters } from "../../constants";

export default function ContactRow({ item }: { item: Contact }) {
  return (
    <Link
      asChild
      href={{
        pathname: "/SinpeScreen",
        params: {
          id: item.id,
          name: item.name,
          phoneNumber: item.phoneNumber,
        },
      }}
      key={item.id}
    >
      <TouchableOpacity style={AppStyles.contactItem}>
        <View style={AppStyles.contactInitialsContainer}>
          <Text style={AppStyles.contactInitials}>
            {ExtractFirstLetters({ nameP: item.name })}
          </Text>
        </View>
        <View style={AppStyles.contactDetails}>
          <Text style={AppStyles.contactName}>{item.name}</Text>
          <Text style={AppStyles.contactPhone}>{item.phoneNumber}</Text>
        </View>
        <Text style={AppStyles.ContactArrow}>{">"}</Text>
      </TouchableOpacity>
    </Link>
  );
}
