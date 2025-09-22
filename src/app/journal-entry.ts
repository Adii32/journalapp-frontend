export type Category = 'TRAIVEL' |'FOOD'|'MOOD'|'	KNOWLEDGE'|'SKILL'|'TECHNOLOGY';
export type Sentiments = 'HAPPY' | 'SAD' | 'ANGRY' | 'ANXIOUS' ;


export class JournalEntry {
  id : number =0;
  title: string = '';
  content: string = '';
  date: string = new Date().toISOString(); // Default to current date string
  img: string = '';
  cloudinaryPublicId: string = '';
  favorite: boolean = false;
  category: Category | null = null;
  sentiments: Sentiments | null = null;

  constructor(init?: Partial<JournalEntry>) {
    Object.assign(this, init);
  }
}
