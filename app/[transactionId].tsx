import { View, StyleSheet, Text, Pressable } from "react-native";
import { formaterCurrency } from "../src/Utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useLocalSearchParams } from "expo-router";
import ScreenCom from "../src/Components/Screen";
import AppStyles from "../src/styles/AppStyles";

export default function TransactionDetails() {
  const { transactionId } = useLocalSearchParams();

  return (
    <ScreenCom>
      <View style={TransactionDetailsStyles.section}>
        <View style={TransactionDetailsStyles.header}>
          <Link asChild href="/">
            <Pressable>
              <AntDesign name="arrowleft" size={24} color="blue" />
            </Pressable>
          </Link>
          <Text style={TransactionDetailsStyles.container}>
            Detalles de movimiento
          </Text>
        </View>

        <View style={AppStyles.contactPreviewC}>
          <Text style={AppStyles.contactPreviewT}>CN</Text>
        </View>

        <Text>SINPE móvil - Carlos Narango </Text>
        <Text>{formaterCurrency(30000)} </Text>
      </View>

      <View style={TransactionDetailsStyles.section}>
        <View>
          <Text style={TransactionDetailsStyles.headerTitle}>Fecha:</Text>
          <Text>Fecha: 12/12/2023</Text>
        </View>
        <View>
          <Text style={TransactionDetailsStyles.headerTitle}>
            {" "}
            Descripción:
          </Text>
          <Text>Fiesta</Text>
        </View>

        <View>
          <Text style={TransactionDetailsStyles.headerTitle}>
            Tipo de movimiento:
          </Text>
          <Text>SINPE móvil</Text>
        </View>
      </View>

      <Link asChild href="/">
        <Pressable>
          <Text style={TransactionDetailsStyles.button}>Volver</Text>
        </Pressable>
      </Link>
    </ScreenCom>
  );
}

const TransactionDetailsStyles = StyleSheet.create({
  header: {
    backgroundColor: "#4c51f7",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4c51f7",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
