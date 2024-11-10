import { API_URLS_WINK } from "../constants";
import {
  TransactionCreationInterface,
  TransactionFetchInterface,
  transactionsLazyInterface,
  userIdType,
} from "../types";

export function fetchTransactionById({
  userId,
  transactionId,
}: TransactionFetchInterface) {
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

// eslint-disable-next-line prettier/prettier
export function fetchUserTransactions({ userId, lastEvaluatedKey }: transactionsLazyInterface) {
  // eslint-disable-next-line prettier/prettier
  return fetch(API_URLS_WINK.GET_USER_TRANSACTIONS({ userId, lastEvaluatedKey }))
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}
export function createTransaction({
  newtransaction,
}: {
  newtransaction: TransactionCreationInterface;
}) {
  return fetch(API_URLS_WINK.CREATE_TRANSACTION, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newtransaction),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}
