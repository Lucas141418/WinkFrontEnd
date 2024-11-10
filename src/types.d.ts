/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
type userIdType = {
  userId: string;
};

export interface userInfoInterface {
  userName: string;
  balance: number;
  userId: string;
  userPhone: string;
}

export interface TransactionInterface {
  detailsTransaction: string;
  timeTransaction: string;
  recipientPhone: string;
  userId: string;
  recipientName: string;
  amount: number;
  recipientId: string;
  transactionId: string;
}

export interface TransactionCreationInterface {
  detailsTransaction: string;
  recipientPhone: string;
  userId: string;
  recipientName: string;
  amount: number;
  recipientId: string;
}

export interface TransactionFetchInterface {
  userId: string;
  transactionId: string;
}

export interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
}

export interface transactionsLazyInterface {
  userId: string;
  lastEvaluatedKey: string | number | boolean | null ;
}
