import { useState } from "react";
import { TransactionCreationInterface } from "../types";
import { createTransaction } from "../Services/FetchData";

export default function useFetchCreateTransaction() {
  const [transaction, setTransaction] = useState<TransactionCreationInterface>({
    detailsTransaction: "",
    recipientPhone: "",
    userId: "",
    recipientName: "",
    amount: 0,
    recipientId: "",
  });
  const [error, setError] = useState<string | null | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // eslint-disable-next-line prettier/prettier
  const fetchCreationTransaction = async ({
    transaction,
  }: {
    transaction: TransactionCreationInterface;
  }) => {
    console.log("The transaction was called ");
    setLoading(true);
    setError(null);
    try {
      const res = await createTransaction({ transaction });
      setTransaction(res);
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
