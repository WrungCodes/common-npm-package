import { Subjects } from './subjects';
import { UserType } from "./types/user-type";

export interface UserCreatedEvent {
  subject: Subjects.UserCreatedEvent;
  data: {
    id: string,
    model: UserType,
    email?: string,
    phone?: string
  };
}