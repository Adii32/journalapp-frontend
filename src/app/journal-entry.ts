export type Category = 'TRAIVEL' |'FOOD'|'MOOD'|'	KNOWLEDGE'|'SKILL'|'TECHNOLOGY';



export class JournalEntry {
  id : number =0;
  title: string = '';
  content: string = '';
  date ? : Date;
  img: string = '';
  cloudinaryPublicId: string = '';
  favorite: boolean = false;
  category: Category | null = null;
  
sentimentLabel  : string = '';
  sentimentScore : number = 0;


}
