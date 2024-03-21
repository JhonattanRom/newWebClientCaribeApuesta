export type UserBankAccount = {
    id: number;
    bankUserId: number;
    accountBankUserDNI: string,
    accountBankUserName: string,
    accountBankEntity: string;
    accountBankCode: string;
    accountBankType: string;
    accountBankNumber: string;
    isActive: boolean;
    pagoMovil?: string
}