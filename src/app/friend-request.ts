import { User } from "./user";
export type Status = 'PENDING' | 'REJECTED' | 'ACCEPTED';
export class FriendRequest {
  id : number =0;
  sender ? : User;
  receiver ? : User;
  status ? : Status = 'PENDING';
}