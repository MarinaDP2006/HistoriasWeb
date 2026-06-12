import { Injectable } from '@angular/core';
import { Story } from '../models/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private stories: Story[] = [
    // ========== EN PUBLICACIÓN Y ACTUALIZACIÓN ==========
    {
      id: 'legendary-secret-lovers-eomer',
      title: 'LEGENDARY SECRET LOVERS | Éomer',
      type: 'fanfic',
      fandom: 'El Señor de los Anillos',
      tags: ['éomer', 'legolas', 'rohan', 'romance', 'guerra', 'secreto'],
      description: 'Lira, Legolas younger sister, travels to Rohan as part of the Fellowships mission. Little did she know that there she would meet Éomer, the kingdoms most loyal rider and the man destined to become both her greatest threat and her greatest refuge. From the very first moment, Éomer tries to ignore his feelings. But war cannot stop the inevitable. English version',
      wattpadUrl: 'https://www.wattpad.com/story/412380769-legendary-secret-lovers-%C3%A9omer',
      cover: 'assets/covers/legendary-secret-lovers.jpg',
      status: 'ongoing',
      language: 'english'
    },
    {
      id: 'legendary-lovers-eomer',
      title: 'LEGENDARY LOVERS | Éomer',
      type: 'fanfic',
      fandom: 'El Señor de los Anillos',
      tags: ['éomer', 'legolas', 'rohan', 'romance', 'guerra', 'español'],
      description: 'Lira, la hermana menor de Legolas, viaja a Rohan como parte de la misión de la Comunidad. Lo que nunca imaginó es que allí conocería a Éomer, el jinete más leal del reino y el hombre destinado a convertirse en su mayor peligro... y su mayor refugio. Desde el primer momento, Éomer intenta ignorar lo que siente. Pero la guerra no detiene lo inevitable. Versión en español.',
      wattpadUrl: 'https://www.wattpad.com/story/412341030-legendary-lovers-%C3%A9omer',
      cover: 'assets/covers/legendary-lovers.jpg',
      status: 'ongoing',
      language: 'spanish'
    },

    // ========== TERMINADOS Y PUBLICADOS ==========
    {
      id: 'nothing-to-lose-except-you-billy-butcher',
      title: 'NOTHING TO LOSE EXCEPT YOU | Billy Butcher',
      type: 'fanfic',
      fandom: 'The Boys',
      tags: ['billy butcher', 'the boys', 'vought', 'acción', 'drama', 'violencia'],
      description: 'Billy Butcher estaba preparado para matar. Para perder. Para morir. No para ella. Emily entra en su vida entre sangre, paranoia y demasiadas malas decisiones consecutivas. Dos personas demasiado rotas intentando sobrevivir en un mundo donde los héroes son el problema.',
      wattpadUrl: 'https://www.wattpad.com/story/411797366-nothing-to-lose-except-you-billy-butcher',
      cover: 'assets/covers/nothing-to-lose.jpg',
      status: 'complete',
      language: 'spanish'
    },
    {
      id: 'el-gorrion-y-la-mujer-del-mar-jack-sparrow',
      title: 'El gorrión y la mujer del mar | Jack Sparrow',
      type: 'fanfic',
      fandom: 'Piratas del Caribe',
      tags: ['jack sparrow', 'piratas', 'aventura', 'romance', 'mar'],
      description: 'Tras desaparecer después de enfrentarse a un fantasma, Jack Sparrow recorre el mar Caribe en busca de una nueva aventura. Una mujer naufragada será su obstáculo... ¿Será capaz de adueñarse del corazón del pirata antes de que termine su historia?',
      wattpadUrl: 'https://www.wattpad.com/story/365375248-el-gorri%C3%B3n-y-la-mujer-del-mar-jack-sparrow',
      cover: 'assets/covers/el-gorrion-y-la-mujer-del-mar.jpg',
      status: 'complete',
      language: 'spanish'
    },

    // ========== MÁS LEÍDOS, TERMINADOS Y PUBLICADOS ==========
    {
      id: 'dayan-denali',
      title: 'DAYAN DENALI',
      type: 'fanfic',
      fandom: 'Crepúsculo',
      tags: ['crepúsculo', 'denali', 'cullen', 'vampiros', 'protegida'],
      description: 'Eres una joven humana que pronto será el vampiro más poderoso de ambos clanes. No solo eres la protegida de los Denali, sino también amiga de los Cullen. Atraes la atención de tu salvador y eres considerada parte de la familia. Esta es tu nueva vida.',
      wattpadUrl: 'https://www.wattpad.com/story/371346486-dayan-denali',
      cover: 'assets/covers/dayan-denali.jpg',
      status: 'complete',
      language: 'spanish'
    },
    {
      id: 'la-luz-del-rey-thranduil',
      title: 'La luz del Rey | Thranduil',
      type: 'fanfic',
      fandom: 'El Hobbit / El Señor de los Anillos',
      tags: ['thranduil', 'legolas', 'elfos', 'bosque negro', 'sanación', 'amistad'],
      description: 'Mara, una joven elfa que huye de su hogar en busca de libertad, se pierde en el Bosque Negro y descubre el reino oculto de Thranduil. Forma un vínculo especial con el rey, ayudándolo a sanar su tristeza tras la pérdida de su esposa, y una profunda amistad con Legolas.',
      wattpadUrl: 'https://www.wattpad.com/story/370676694-la-luz-del-rey-thranduil',
      cover: 'assets/covers/la-luz-del-rey.jpg',
      status: 'complete',
      language: 'spanish'
    },
    {
      id: 'my-present-and-future-jj-maybank',
      title: 'My present and future | JJ MAYBANK',
      type: 'fanfic',
      fandom: 'Outer Banks',
      tags: ['jj maybank', 'outer banks', 'pogues', 'sarah cameron', 'aventura'],
      description: 'Después de la desaparición de John B y Sarah, los chicos se encuentran con Claire Madison, prima de Sarah Cameron. Claire les ayudará a encontrarlos. De ser una Pogue desde nacimiento, se enamorará de JJ Maybank, quien aún no sabe del todo sus sentimientos por ella.',
      wattpadUrl: 'https://www.wattpad.com/story/375456964-my-present-and-future-jj-maybank',
      cover: 'assets/covers/my-present-and-future.jpg',
      status: 'complete',
      language: 'spanish'
    },

    // ========== ORIGINAL ==========
    {
      id: 'entre-paginas-e-historia',
      title: 'Entre páginas e historia',
      type: 'original',
      fandom: 'Original',
      tags: ['romance', 'biblioteca', 'triángulo amoroso', 'profesor', 'navidad'],
      description: 'Max Hartley pensaba que las coincidencias no existían para ella... Hasta aquel verano, el invierno y la mejor navidad de su vida. Josh Ridley, el nuevo bibliotecario. Tom Shades, el profesor de su universidad. Sabía que uno de ellos la estaba esperando, pero... ¿quién?',
      wattpadUrl: 'https://www.wattpad.com/story/399885493-entre-paginas-e-historia',
      cover: 'assets/covers/entre-paginas-e-historia.jpg',
      status: 'complete',
      language: 'spanish'
    }
  ];

  // Obtener todas las historias
  getStories(): Story[] {
    return this.stories;
  }

  // Obtener por tipo (fanfic o original)
  getStoriesByType(type: 'fanfic' | 'original'): Story[] {
    return this.stories.filter(story => story.type === type);
  }

  // Obtener por estado (completado o en curso)
  getStoriesByStatus(status: 'complete' | 'ongoing'): Story[] {
    return this.stories.filter(story => story.status === status);
  }

  // Obtener una historia por ID
  getStoryById(id: string): Story | undefined {
    return this.stories.find(story => story.id === id);
  }

  // Buscar historias por término
  searchStories(term: string): Story[] {
    const searchTerm = term.toLowerCase();
    return this.stories.filter(story =>
      story.title.toLowerCase().includes(searchTerm) ||
      story.fandom.toLowerCase().includes(searchTerm) ||
      story.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      story.description.toLowerCase().includes(searchTerm)
    );
  }

  // Obtener historias destacadas (las más leídas o recientes)
  getFeaturedStories(): Story[] {
    // Devuelve las 6 más recientes por ID (puedes personalizar)
    return this.stories.slice(0, 6);
  }
}
