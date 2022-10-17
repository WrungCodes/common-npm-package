import { Subjects } from './subjects';
import { TransactionType } from "./types/transaction-type";
import { WalletUpdateType } from "./types/wallet-update-type";

export interface UpdateWalletEvent {
  subject: Subjects.UpdateWallet;
  data: {
    type: WalletUpdateType,
    value: string,
    version: string,
    walletId: string,
    transaction: {
        id: string,
        type: TransactionType
        description: string
    }
  };
}