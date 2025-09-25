import { JournalEntry } from "./journal-entry";

export class User {
  userId : number=0;               // Optional property with ?
  userName: string = '';
  email: string = '';
  sentimentAnalysis: boolean = false;
  roles: string = ''; 
  password: string = '';
  entry: JournalEntry[] = [];     // Initialize empty array to avoid undefined error
  profilePic: string = '';
  cloudinaryPublicId: string = '';
  tokenExpiry: string | null = null;  // Initialize null
  resetToken: string = '';


}
