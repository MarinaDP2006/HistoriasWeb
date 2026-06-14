export interface Story {
  id: number;
  title: string;
  fandom: string;
  type: 'fanfic' | 'original';
  description: string;
  cover: string;
  link: string;
}
