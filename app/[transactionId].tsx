import { View, StyleSheet, Text, Pressable } from "react-native";
import { formaterCurrency } from "../src/Utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useLocalSearchParams } from "expo-router";

export default function TransactionDetails() {
  const { transactionId } = useLocalSearchParams();
  return (
    <View>
      <View style={TransactionDetailsStyles.section}>
        <View style={TransactionDetailsStyles.header}>
          <Link asChild href="/">
            <Pressable>
              <AntDesign name="arrowleft" size={24} color="blue" />
            </Pressable>
          </Link>
          <Text style={TransactionDetailsStyles.container}>
            Detalles de movimiento
            {transactionId}
          </Text>
        </View>

        <View style={TransactionDetailsStyles.circle}>
          <Text style={TransactionDetailsStyles.text}>CN</Text>
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
    </View>
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
  circle: {
    //Posiblemente quitar o cambiar nombre
    width: 100, // Puedes ajustar el tamaño según lo necesites
    height: 100,
    borderRadius: 50, // Hace que el `View` sea un círculo
    backgroundColor: "#D6D6FF", // Color de fondo
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
  },
  text: {
    color: "#4A4AFF", // Color del texto
    fontSize: 24, // Tamaño de la fuente
    fontWeight: "bold",
  },
});
