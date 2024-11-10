import { Link } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import AppStyles from "../../styles/AppStyles";
import { Contact } from "../../types";

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
          initials: item.initials,
        },
      }}
      key={item.id}
    >
      <TouchableOpacity style={AppStyles.contactItem}>
        <View style={AppStyles.contactInitialsContainer}>
          <Text style={AppStyles.contactInitials}>{item.initials}</Text>
        </View>
        <View style={AppStyles.contactDetails}>
          <Text style={AppStyles.contactName}>{item.name}</Text>
          <Text style={AppStyles.contactPhone}>{item.phoneNumber}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
