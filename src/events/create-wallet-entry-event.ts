import { Subjects } from "./subjects";
import { TransactionType } from "./types/transaction-type";
import { WalletEntryType } from "./types/wallet-entry-type";

export interface CreateWalletEntryEvent {
    subject: Subjects.UpdateWallet;
    data: {
      type: WalletEntryType,
      value: string,
      walletId: string,
      transaction: {
        id: string,
        type: TransactionType,
        description: string,
        author: string
      }
    };
  }