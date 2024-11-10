import { Contact, transactionsLazyInterface } from "./types";

export const UsersIds = {
  userId1: "c717270e-6239-4331-9e8d-f64246ee470b",
  userId2: "",
};

export const ExtractFirstLetters = ({ nameP }: { nameP: string }): string => {
  return nameP
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
};

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
  // eslint-disable-next-line prettier/prettier
  GET_USER_TRANSACTIONS: ({
    userId,
    lastEvaluatedKey,
  }: transactionsLazyInterface) =>
    baseURl +
    `/getUserTransactions/${userId}?lastEvaluatedKey=${encodeURIComponent(lastEvaluatedKey)}`,
};

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Ana Campos",
    phoneNumber: "+506 8753-6347",
  },
  {
    id: "2",
    name: "Ana Lucía",
    phoneNumber: "+506 8753-6543",
  },
  {
    id: "3",
    name: "Alberto Chaves",
    phoneNumber: "+506 8722-6543",
  },
  {
    id: "4",
    name: "Arturo Robles",
    phoneNumber: "+506 8731-6543",
  },
  {
    id: "5",
    name: "Bernal Campos",
    phoneNumber: "+506 8883-6543",
  },
  {
    id: "6",
    name: "Carlos Naranjo",
    phoneNumber: "+506 8765-4321",
  },
  {
    id: "7",
    name: "Daniel Solano",
    phoneNumber: "+506 8872-4321",
  },
  {
    id: "8",
    name: "Elena Sánchez",
    phoneNumber: "+506 8543-1234",
  },
  {
    id: "9",
    name: "Fernando Gómez",
    phoneNumber: "+506 8432-4321",
  },
  {
    id: "10",
    name: "Gabriela Mora",
    phoneNumber: "+506 8654-7890",
  },
  {
    id: "11",
    name: "Héctor Ruiz",
    phoneNumber: "+506 8923-4567",
  },
  {
    id: "12",
    name: "Irene Paniagua",
    phoneNumber: "+506 8012-3456",
  },
  {
    id: "13",
    name: "Javier Mendoza",
    phoneNumber: "+506 8789-5678",
  },
  {
    id: "14",
    name: "Karla Jiménez",
    phoneNumber: "+506 8555-4321",
  },
  {
    id: "15",
    name: "Luis Torres",
    phoneNumber: "+506 8643-6789",
  },
  {
    id: "16",
    name: "Mariana Vázquez",
    phoneNumber: "+506 8734-5432",
  },
  {
    id: "17",
    name: "Natalia López",
    phoneNumber: "+506 8890-1234",
  },
  {
    id: "18",
    name: "Óscar Ramírez",
    phoneNumber: "+506 8765-9876",
  },
  {
    id: "19",
    name: "Patricia Solís",
    phoneNumber: "+506 8901-2345",
  },
  {
    id: "20",
    name: "Quintín León",
    phoneNumber: "+506 8546-7890",
  },
];
