<<<<<<< HEAD
export interface Story {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  category: 'fanfic' | 'original' | 'edition';
  type?: 'fanfic' | 'original' | 'edition';  // Para compatibilidad
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  reads: number;
  chapters: number;
  completed: boolean;
  fandom?: string;
}
=======
export interface Story {
  id: number;
  title: string;
  fandom: string;
  type: 'fanfic' | 'original';
  description: string;
  cover: string;
  link: string;
}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
