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
