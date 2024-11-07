interface UsersIds {
  userId1: string,
  userId2: string
}


export const UsersIds: UsersIds = {
  userId1: "c717270e-6239-4331-9e8d-f64246ee470b",
  userId2: "b0a02aa1-400b-4dd7-bbec-3d053c7bda75"
}


const baseURl = "https://fav0g62zf9.execute-api.us-east-1.amazonaws.com";
export const API_URLS_WINK = {
  CREATE_TRANSACTION: baseURl + "/createTransaction",
  GET_TRANSACTION_BY_ID: ({
    userId,
    transactionId,
  }: {
    userId: string;
    transactionId: string;
  }) => baseURl + `/getTransactionById/${userId}/${transactionId}`,
  GET_USER_INFO_BY_ID: ({ userId }: { userId: string }) =>
    baseURl + `/getUserInfoById/${userId}`,
  GET_USER_TRANSACTIONS: ({ userId }: { userId: string }) =>
    baseURl + `/getUserTransactions/${userId}`,
};
