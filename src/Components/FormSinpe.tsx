import { Controller, useForm } from "react-hook-form";
import { Pressable, TextInput, View, Text } from "react-native";
import useFetchCreateTransaction from "../Hooks/useFetchCreateTransaction";
import { TransactionCreationInterface } from "../types";
import AppStyles from "../styles/AppStyles";

type FormData = {
  amount: string;
  detail: string;
};

export default function FormSinpe() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { fetchCreationTransaction } = useFetchCreateTransaction();

  const onSubmit = (data: FormData) => {
    const { amount, detail } = data;
    const transaction: TransactionCreationInterface = {
      detailsTransaction: detail,
      recipientPhone: "85210734", //Contacts
      userId: "c717270e-6239-4331-9e8d-f64246ee470b",
      recipientName: "David Lucas", //conctacts
      amount: parseFloat(amount),
      recipientId: "recipient456", //mocks
    };
    // fetchCreationTransaction({ transaction });
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
