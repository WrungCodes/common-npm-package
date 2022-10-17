import { Subjects } from './subjects';
import { UserType } from "./types/user-type";

export interface UserVerifiedEvent {
  subject: Subjects.UserVerifiedEvent;
  data: {
    id: string,
    model: UserType,
    email?: string,
    phone?: string
  };
}