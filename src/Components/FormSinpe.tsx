import { Controller, useForm } from "react-hook-form";
import { Pressable, TextInput, View, Text } from "react-native";
import useFetchCreateTransaction from "../Hooks/useFetchCreateTransaction";
import { TransactionCreationInterface } from "../types";
import AppStyles from "../styles/AppStyles";
import { Link, useRouter } from "expo-router";
import useFetchUserInfo from "../Hooks/useFetchUserInfo";

type FormData = {
  amount: string;
  detail: string;
};
interface FormSinpeProps {
  phoneNumber: string;
  name: string;
  id: string;
}

// eslint-disable-next-line prettier/prettier
export default function FormSinpe({ phoneNumber, name, id }: FormSinpeProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { fetchCreationTransaction, transaction } = useFetchCreateTransaction();
  const { getUserInfo, setUserInfo, userInfo } = useFetchUserInfo();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const { amount, detail } = data;
    const newtransaction: TransactionCreationInterface = {
      detailsTransaction: detail,
      recipientPhone: phoneNumber,
      userId: "c717270e-6239-4331-9e8d-f64246ee470b",
      recipientName: name,
      amount: parseFloat(amount),
      recipientId: id,
    };

    try {
      const { data } = await fetchCreationTransaction({ newtransaction });
      const updatedUser = await getUserInfo({ userId: userInfo.userId });
      setUserInfo(updatedUser);
      console.log(transaction);
      if (data) {
        router.replace("/");
      }
    } catch (err) {
      console.error("Error al crear la transacción:", err);
    }
  };
  return (
    <View>
      <Text>Monto</Text>
      <Controller
        name="amount"
        control={control}
        rules={{
          validate: {
            positive: (value) =>
              // eslint-disable-next-line prettier/prettier
              parseFloat(value) > 0 ||
              "El monto de la tranferencia debe ser mayor que 0",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="₡0.00"
            style={AppStyles.searchInput}
            keyboardType="numeric"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.amount && (
        <Text style={AppStyles.errorText}>{errors.amount.message}</Text>
      )}

      <Text>Descripción</Text>
      <Controller
        name="detail"
        control={control}
        rules={{
          required: {
            value: true,
            message: "La descripción de la tranferencia es requerida",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={AppStyles.searchInput}
            placeholder="Descripción"
            keyboardType="default"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.detail && (
        <Text style={AppStyles.errorText}>{errors.detail.message}</Text>
      )}

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>Confirmar</Text>
      </Pressable>
    </View>
  );
}
