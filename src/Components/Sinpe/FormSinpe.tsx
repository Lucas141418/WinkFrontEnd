/* eslint-disable prettier/prettier */
import { Controller, useForm } from "react-hook-form";
import { Pressable, TextInput, View, Text } from "react-native";
import useFetchCreateTransaction from "../../Hooks/useFetchCreateTransaction";
import { TransactionCreationInterface } from "../../types";
import AppStyles from "../../styles/AppStyles";
import { useRouter } from "expo-router";
import useFetchUserInfo from "../../Hooks/useFetchUserInfo";
import { useContext, useEffect, useState } from "react";
import { UserInfoContext } from "../../context/userInfoContext";

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
  // eslint-disable-next-line prettier/prettier
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { fetchCreationTransaction, loading } = useFetchCreateTransaction();
  const { getUserInfo, setUserInfo, userInfo } = useFetchUserInfo();
  const [errorSinpe, setErrorSinpe] = useState<string | null>(null);
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

    if (!loading) {
      try {
        const { data } = await fetchCreationTransaction({ newtransaction });
        const updatedUser = await getUserInfo({ userId: userInfo.userId });
        setUserInfo(updatedUser);
        if (data) {
          router.push("/");
        }
      } catch (err) {
        setErrorSinpe("Error al crear la transaccion");
        console.log(err);
      }
    } else {
      setErrorSinpe("La transaccion ya esta en proceso, por favor espere");
    }
  };
  return (
    <View style={AppStyles.SinpeInputsContainer}>
      <View>
        <Text style={AppStyles.h3}>Monto</Text>
        <Controller
          name="amount"
          control={control}
          rules={{
            validate: {
              positive: (value) => {
                if (parseFloat(value) <= 0) {
                  return "El monto de la transferencia debe ser mayor que 0"; // Devolver el mensaje de error
                }
                return true;
              },
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
        {errors.detail && (
          <Text style={AppStyles.errorText}>{errors.detail.message}</Text>
        )}

        <Text style={AppStyles.h3}>Detalle</Text>
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
      </View>
      {errorSinpe && <Text style={AppStyles.errorText}>{errorSinpe}</Text>}
      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={AppStyles.Transactionbutton}
      >
        <Text style={AppStyles.buttonText}>
          {loading ? "Processando.." : "Confirmar"}
        </Text>
      </Pressable>
    </View>
  );
}
