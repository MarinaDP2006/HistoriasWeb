export interface Story {
  id: string;
  title: string;
  type: 'fanfic' | 'original';
  fandom: string;
  tags: string[];
  description: string;
  wattpadUrl: string;
  cover: string;
}
