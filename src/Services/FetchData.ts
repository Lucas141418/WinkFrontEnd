import { API_URLS_WINK } from "../constants";
import {
  TransactionCreationInterface,
  TransactionInterface,
  userIdType,
} from "../types";

export function fetchTransactionById({
  userId,
  transactionId,
}: TransactionInterface) {
  return fetch(API_URLS_WINK.GET_TRANSACTION_BY_ID({ userId, transactionId }))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function fetchUserInfoById({ userId }: userIdType) {
  return fetch(API_URLS_WINK.GET_USER_INFO_BY_ID({ userId }))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}

export function fetchUserTransactions({ userId }: userIdType) {
  return fetch(API_URLS_WINK.GET_USER_TRANSACTIONS({ userId }))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => data.transactions)
    .catch((err) => console.log(err));
}
export function createTransaction({
  transaction,
}: {
  transaction: TransactionCreationInterface;
}) {
  return fetch(API_URLS_WINK.CREATE_TRANSACTION, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transaction),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}
