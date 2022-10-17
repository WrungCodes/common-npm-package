import { Subjects } from './subjects';
import { TransactionType } from "./types/transaction-type";

export interface TransactionCreatedEvent {
  subject: Subjects.TransactionCreated;
  data: {};
}