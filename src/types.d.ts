/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */


export interface userInfo {
    userName:  string;
    balance:   number;
    userId:    string;
    userPhone: string;
}

export interface Transaction {
    detailsTransaction: string;
    timeTransaction:    string;
    recipientPhone:     string;
    userId:             string;
    recipientName:      string;
    amount:             number
    recipientId:        string;
    transactionId:      string;
}
