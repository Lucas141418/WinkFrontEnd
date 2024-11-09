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

  const [error, setError] = useState<string | null | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // eslint-disable-next-line prettier/prettier
  const fetchCreationTransaction = async ({
    newtransaction,
  }: {
    newtransaction: TransactionCreationInterface;
  }) => {
    console.log("The transaction was called ");
    setLoading(true);
    setError(null);
    try {
      const res = await createTransaction({ newtransaction });
      setTransaction(res);
      return res;
    } catch (err: unknown) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    transaction,
    error,
    loading,
    fetchCreationTransaction,
  };
}
