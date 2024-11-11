import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Pressable, Text } from "react-native";
import AppStyles from "../styles/AppStyles";

export default function Header({ textHeader }: { textHeader: string }) {
  const router = useRouter();

  const navigateToLastPage = () => {
    router.back();
  };

  return (
    <View style={AppStyles.header}>
      <View style={AppStyles.HeaderArrow}>
        <Pressable
          style={AppStyles.headerBackButton}
          onPress={navigateToLastPage}
        >
          <AntDesign name="arrowleft" size={35} color="blue" />
        </Pressable>
      </View>
      <Text style={AppStyles.headerText}>{textHeader}</Text>
      <View style={AppStyles.placeholderHeader} />
    </View>
  );
}
