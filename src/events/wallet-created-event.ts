import { Subjects } from './subjects';
import { UserType } from "./types/user-type";

export interface WalletCreatedEvent {
  subject: Subjects.WalletCreated;
  data: {
    id: string,
    model: UserType,
    modelId: string,
  };
}