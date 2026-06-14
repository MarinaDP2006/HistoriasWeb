<<<<<<< HEAD
import { Injectable, signal } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable({ providedIn: 'root' })
export class StoriesService {
  private stories = signal<Story[]>([
    // ========== POPULARES (las que aparecerán en Home) ==========
    {
      id: '7',
      title: 'Dayan Denali',
      author: 'Ninai_06',
      description: 'Eres una joven humana que pronto será el vampiro más poderoso de ambos clanes. Ahora, eres no solo la protegida de los Denali, sino también amiga de los Cullen. Atraes la atención de tu salvador y los demás miembros del clan te consideran parte de su familia. Esta es tu nueva vida, tu nueva familia. Eres la chica de los Denali.',
      coverImage: 'dayan-denali.jpg',
      category: 'edition',
      tags: ['vampiros', 'crepúsculo', 'denali', 'cullen'],
      createdAt: new Date(2024, 6, 31),
      updatedAt: new Date(2024, 6, 31),
      likes: 350,
      reads: 7800,
      chapters: 15,
      completed: true,
      fandom: 'Crepúsculo'
    },
    {
      id: '2',
      title: 'La luz del rey',
      author: 'Ninai_06',
      description: 'Mara, una joven elfa que huye de su hogar en busca de libertad, se pierde en el Bosque Negro y descubre el reino oculto de Thranduil. Acogida por los elfos del reino, encuentra en ellos un nuevo hogar. Mara forma un vínculo especial con el rey Thranduil, ayudándolo a sanar y transformar su tristeza en luz tras la pérdida de su esposa.',
      coverImage: 'la-luz-del-rey.jpg',
      category: 'fanfic',
      tags: ['romance', 'aventura', 'thranduil', 'elfos'],
      createdAt: new Date(2024, 5, 30),
      updatedAt: new Date(2024, 5, 30),
      likes: 629,
      reads: 8700,
      chapters: 14,
      completed: true,
      fandom: 'El Señor de los Anillos'
    },
    {
      id: '4',
      title: 'My present and future',
      author: 'Ninai_06',
      description: 'Después de la desaparición de John B y Sarah, los chicos se encuentran con una chica bastante peculiar, Claire Madison, prima de Sarah Cameron. Claire les ayudará a encontrar los. Pero no es todo, ya que de ser una simple ayuda se convertirá en algo más...',
      coverImage: 'my-present-and-future.jpg',
      category: 'fanfic',
      tags: ['romance', 'drama', 'outer banks', 'jj maybank'],
      createdAt: new Date(2024, 10, 15),
      updatedAt: new Date(2024, 11, 20),
      likes: 60,
      reads: 2300,
      chapters: 12,
      completed: true,
      fandom: 'Outer Banks'
    },

    // ========== ÚLTIMAS (Legendary Lovers, Legendary Secret Lovers, Nothing to lose) ==========
 {
  id: '9',
  title: 'Legendary Lovers | Éomer',
  author: 'Ninai_06',
  description: 'Lira, la hermana menor de Legolas, viaja a Rohan como parte de la misión de la Comunidad. Lo que nunca imaginó es que allí conocería a Éomer, el jinete más leal del reino y el hombre destinado a convertirse en su mayor peligro... y su mayor refugio.',
  coverImage: 'legendary-secret-lovers.jpg',
  category: 'fanfic',
  tags: ['romance', 'aventura', 'legolas', 'éomer'],
  createdAt: new Date(2025, 4, 10),
  updatedAt: new Date(2026, 5, 13),
  likes: 21,
  reads: 0,
  chapters: 13,
  completed: false,
  fandom: 'El Señor de los Anillos'
},
{
  id: '10',
  title: 'Legendary Secret Lovers | Éomer',
  author: 'Ninai_06',
  description: 'Versión en inglés de "Legendary Lovers". Lira, Legolas\'s younger sister, travels to Rohan as part of the Fellowship\'s mission. What she never imagined was that there she would meet Éomer, the kingdom\'s most loyal rider and the man destined to become her greatest danger... and his greatest refuge.',
  coverImage: 'legendary-secret-lovers.jpg',
  category: 'fanfic',
  tags: ['romance', 'aventura', 'legolas', 'éomer', 'english'],
  createdAt: new Date(2025, 5, 15),
  updatedAt: new Date(2026, 5, 13),
  likes: 32,
  reads: 0,
  chapters: 13,
  completed: false,
  fandom: 'El Señor de los Anillos'
},
{
      id: '5',
      title: 'Nothing to lose except you',
      author: 'Ninai_06',
      description: 'Billy Butcher estaba preparado para matar. Para perder. Para morir. No para ella. Emily entra en su vida entre sangre, paranoia y demasiadas malas decisiones consecutivas. Nada nuevo. Solo otra guerra. Solo otro desastre. Solo dos personas demasiado rotas intentando sobrevivir en un mundo donde los héroes son el problema.',
      coverImage: 'nothing-to-lose-except-you.jpg',
      category: 'fanfic',
      tags: ['acción', 'drama', 'the boys', 'billy butcher'],
      createdAt: new Date(2025, 2, 15),
      updatedAt: new Date(2026, 5, 9),
      likes: 320,
      reads: 890,
      chapters: 10,
      completed: true,
      fandom: 'The Boys'
    },

    // ========== OTRAS HISTORIAS (para completar, pero no saldrán en Home) ==========
    {
      id: '8',
      title: 'El gorrión y la mujer del mar',
      author: 'Ninai_06',
      description: 'Tras desaparecer después de enfrentarse a un fantasma, Jack Sparrow recorre el mar del Caribe en busca de una nueva aventura. Una mujer náufraga será su obstáculo en el mar. ¿Será capaz de adueñarse del corazón del pirata antes de que termine su historia?',
      coverImage: 'el-gorrion-y-la-mujer-del-mar.jpg',
      category: 'fanfic',
      tags: ['romance', 'aventura', 'jack sparrow', 'piratas'],
      createdAt: new Date(2024, 2, 31),
      updatedAt: new Date(2024, 2, 31),
      likes: 89,
      reads: 210,
      chapters: 8,
      completed: true,
      fandom: 'Piratas del Caribe'
    },
    {
      id: '3',
      title: 'Entre páginas e historia',
      author: 'Ninai_06',
      description: 'Max Hartley había pensado que las coincidencias no existían para ella... Hasta aquel verano, el invierno y la mejor navidad de su vida. Josh Ridley era el nuevo bibliotecario, recién llegado de un puesto en alguna universidad que Max no recordaba. Tom Shades, el profesor en su universidad. Conforme diciembre avanzaba, en la mente de Max solo había dos que no se iban, el bibliotecario y el profesor. Sabía que uno de ellos la estaba esperando, pero... ¿quién?',
      coverImage: 'entre-paginas-e-historia.jpg',
      category: 'original',
      tags: ['romance', 'juvenil', 'triángulo amoroso', 'navidad'],
      createdAt: new Date(2024, 6, 23),
      updatedAt: new Date(2025, 6, 23),
      likes: 200,
      reads: 560,
      chapters: 12,
      completed: true,
      fandom: ''
    }
  ]);

  // Todas las historias
  getStories(): Story[] {
    return this.stories();
  }

// ÚLTIMAS: excluir la historia de Éomer en ambas versiones y mostrar las 3 más recientes
getRecentStories(): Story[] {
  return [...this.stories()]
    .filter(s => s.id !== '10' && s.id !== '11')
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
    .slice(0, 3);
}

// POPULARES: Dayan Denali, La luz del rey, My present and future
getPopularStories(): Story[] {
  const ids = ['7', '2', '4'];
  return ids.map(id => this.stories().find(s => s.id === id)!).filter(s => s);
}

  // Por categoría
  getStoriesByCategory(category: 'fanfic' | 'original' | 'edition'): Story[] {
    return this.stories().filter(s => s.category === category);
  }

  // Búsqueda
  searchStories(term: string): Story[] {
    const q = term.toLowerCase().trim();
    if (!q) return [];
    return this.stories().filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.author.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      (s.fandom && s.fandom.toLowerCase().includes(q))
    );
  }
}
=======
import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private stories: Story[] = [
    {
      id: 1,
      title: 'LEGENDARY SECRET LOVERS | English Version',
      fandom: 'The Lord of the Rings',
      type: 'fanfic',
      description: 'Lira, Legolas younger sister, travels to Rohan as part of the Fellowship mission. What she never imagined was that there she would meet Éomer, the kingdoms most loyal rider and the man destined to become her greatest danger... and her greatest refuge. From the very first moment, Éomer tries to ignore his feelings. But war cannot stop the inevitable. Between battles, difficult choices, and secrets that could shatter alliances, Lira discovers that Éomer doesnt just protect her: he chooses her. Again and again. Even when the world crumbles around them. And when darkness threatens to tear them apart, they both know that no distance or risk matters. Because if one calls, the other will always answer.',
      cover: 'assets/covers/legendary-secret-lovers.jpg',
      link: 'https://www.wattpad.com/story/412380769-legendary-secret-lovers-%C3%A9omer'
    },
    {
      id: 2,
      title: 'LEGENDARY LOVERS | Spanish Version',
      fandom: 'The Lord of the Rings',
      type: 'fanfic',
      description: 'Historia protagonizada por Éomer.',
      cover: 'assets/covers/legendary-lovers.jpg',
      link: 'https://www.wattpad.com/story/412341030-legendary-lovers-%C3%A9omer'
    },
    {
      id: 3,
      title: 'NOTHING TO LOSE EXCEPT YOU',
      fandom: 'The Boys',
      type: 'fanfic',
      description: 'Billy Butcher estaba preparado para matar. Para perder. Para morir. No para ella. Emily entra en su vida entre sangre, paranoia y demasiadas malas decisiones consecutivas. Error táctico. Porque Billy sigue persiguiendo fantasmas. Vought sigue vendiendo monstruos con sonrisa de publicidad. Y querer a alguien siempre acaba convirtiéndose en una debilidad que alguien más intentará usar contra ti. Nada nuevo. Solo otra guerra. Solo otro desastre.Solo dos personas demasiado rotas intentando sobrevivir en un mundo donde los héroes son el problema.',
      cover: 'assets/covers/nothing-to-lose-except-you.jpg',
      link: 'https://www.wattpad.com/story/411797366-nothing-to-lose-except-you-billy-butcher'
    },
    {
      id: 4,
      title: 'Infinite Game',
      fandom: 'Marvel',
      type: 'fanfic',
      description: 'En la soledad del complejo de los Vengadores, un dios encuentra una conexión inesperada con la única persona que parece entender lo que es vivir una vida de redención manchada de sangre. Esta amistad se convertirá en el pilar que los sostendrá durante años. Pero...unos años después, cuando surge una última esperanza, todos deberán reunirse.',
      cover: 'assets/covers/infinite-game.jpg',
      link: 'https://www.wattpad.com/story/400262254-infinite-game-natki'
    },
    {
      id: 5,
      title: 'DAYAN DENALI',
      fandom: 'Twilight',
      type: 'fanfic',
      description: 'Eres una joven humana que ha sido rescatada por los Denali, un clan de vampiros que te ha acogido como parte de su familia. A pesar de tu naturaleza humana, has aprendido a convivir con ellos y a adaptarte a su mundo sobrenatural. Eres la chica de los Denali.',
      cover: 'assets/covers/dayan-denali.jpg',
      link: 'https://www.wattpad.com/story/371346486-dayan-denali'
    },
    {
      id: 6,
      title: 'La luz del Rey',
      fandom: 'The Hobbit',
      type: 'fanfic',
      description: 'Mara, una joven elfa que huye de su hogar en busca de libertad, se pierde en el Bosque Negro y descubre el reino oculto de Thranduil. Acogida por los elfos del reino, encuentra en ellos un nuevo hogar. Mara forma un vínculo especial con el rey Thranduil, ayudándolo a sanar y transformar su tristeza en luz tras la pérdida de su esposa. Forja una profunda amistad con Legolas, el hijo del rey, embarcándose guerras y consecuencias en el reino de Erebor.',
      cover: 'assets/covers/la-luz-del-rey.jpg',
      link: 'https://www.wattpad.com/story/370676694-la-luz-del-rey-thranduil'
    },
    {
      id: 7,
      title: 'My Present and Future',
      fandom: 'Outer Banks',
      type: 'fanfic',
      description: 'Después de la desaparición de John B y Sarah, los chicos se encuentran con una chica bastante peculiar, Claire Madison, prima de Sarah Cameron. Claire les ayudará a encontrarlos. Pero no es todo, ya que de ser una Pogues desde nacimiento, se enamorará de JJ Maybank, quién aún no sabe del todo sus sentimientos por ella.',
      cover: 'assets/covers/my-present-and-future.jpg',
      link: 'https://www.wattpad.com/story/375456964-my-present-and-future-jj-maybank'
    },
    {
      id: 8,
      title: 'El gorrión y la mujer del mar',
      fandom: 'Piratas del Caribe',
      type: 'fanfic',
      description: 'Tras desaparecer después de enfrentarse a un fantasma, Jack Sparrow, el Capitán de la Perla Negra recorre el mar del Caribe en busca de una nueva aventura para cerrar su historia como el último de los siete lores piratas. Una mujer será su obstáculo en el mar a la derriba, naufragada tras una ataque a su barco inglés por unos piratas. ¿Será capaz de adueñarse del corazón del pirata antes de que termine su historia y ser recordada por siempre?',
      cover: 'assets/covers/el-gorrion-y-la-mujer-del-mar.jpg',
      link: 'https://www.wattpad.com/story/365375248-el-gorri%C3%B3n-y-la-mujer-del-mar-jack-sparrow'
    },
    {
      id: 9,
      title: 'Entre páginas e historias',
      fandom: '',
      type: 'original',
      description: 'Max Hartley había pensado que las coincidencias  no existían para ella... Hasta aquel verano, el invierno y la mejor navidad de su vida. Josh Ridley era el nuevo bibliotecario, recién llegado de un puesto en alguna universidad que Max no recordaba. Tom Shades, el profesor nen su universidad.  Conforme diciembre avanzaba, en la mente de Max solo había dos que no se iban, el bibliotecario  y el profesor. Sabía que uno de ellos la estaba esperando, pero... ¿quién?.',
      cover: 'assets/covers/entre-paginas-e-historias.jpg',
      link: 'https://www.wattpad.com/story/399885493-entre-paginas-e-historia'
    }
  ];

  getStories(): Story[] {
    return this.stories;
  }
  getFanfic(): Story[] {
    return this.stories.filter(
      story => story.type === 'fanfic'
    );
  }
  getOriginal(): Story[] {
    return this.stories.filter(
      story => story.type === 'original'
    );
  }
  search(term: string): Story[] {
    const searchTerm = term.toLowerCase();
     return this.stories.filter(story =>
      story.title.toLowerCase().includes(searchTerm) ||
      story.fandom.toLowerCase().includes(searchTerm)
    );
  }
}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
