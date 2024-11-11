import { useState } from "react";
import { TransactionCreationInterface, TransactionInterface } from "../types";
import { createTransaction } from "../Services/FetchData";

export default function useFetchCreateTransaction() {
  const [transaction, setTransaction] = useState<TransactionInterface>({
    detailsTransaction: "",
    timeTransaction: "",
    recipientPhone: "",
    userId: "",
    recipientName: "",
    amount: 0,
    recipientId: "",
    transactionId: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // eslint-disable-next-line prettier/prettier
  const fetchCreationTransaction = async ({
    newtransaction,
  }: {
    newtransaction: TransactionCreationInterface;
  }) => {
    console.log("The creation transaction was called ");
    setLoading(true);
    setError(null);
    try {
      const data = await createTransaction({ newtransaction });
      setTransaction(data);
      return data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    transaction,
    error,
    loading,
    setError,
    fetchCreationTransaction,
  };
}
