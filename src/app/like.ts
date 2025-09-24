import { JournalEntry } from "./journal-entry";
import { User } from "./user";

export class Like {
  id ? :number;
  user ? : User;
  journalEntry ? : JournalEntry;
  likedAt ?: Date;
}
