export interface IUser {
    userID: number;
    username: string;
    passwordHash: string;
    salt: string;
    address: string;
    twoFactor: boolean;
    totpSecret: string | null;
    userHash: string;
}

export interface SerializedTx {
    blockHeight: number;
    fee: number;
    hash: string;
    paymentID: string;
    timestamp: number;
    unlockTime: number;
    amount: number;
    available: boolean;
}
