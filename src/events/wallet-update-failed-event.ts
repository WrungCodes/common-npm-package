import { Subjects } from './subjects';
import { TransactionType } from "./types/transaction-type";
import { UserType } from "./types/user-type";
import { WalletUpdateType } from "./types/wallet-update-type";

export interface WalletUpdateFailedEvent {
  subject: Subjects.WalletUpdateFailed;
  data: {
    id: string,
    value: string,
    model: UserType,
    modelId: string,
    currencyId: string,
    previousBalance: string,
    currentBalance: string,
    transaction: {
      id: string,
      type: TransactionType
      description: string
    },
    reason: {
      code: string,
      description: string
    }
  };
}