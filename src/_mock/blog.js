import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Conoce a Max, un cachorro en busca de un hogar',
  'Consejos para adoptar a un perro mayor',
  'Historias de éxito en adopciones recientes',
  'Cómo preparar tu hogar para una nueva mascota',
  'Beneficios de adoptar en lugar de comprar',
  'Entrevista con un adoptante feliz: la historia de Luna',
  'Eventos de adopción próximos en tu ciudad',
  'Qué esperar en tu primera visita al refugio',
  'Cómo ayudar a una mascota a adaptarse a su nuevo hogar',
  'Testimonios de voluntarios: experiencias en refugios',
  'Guía para la primera noche con tu nueva mascota',
  'Cómo elegir la mascota adecuada para tu familia',
  'Historias inspiradoras de mascotas rescatadas',
  'Pasos para completar una adopción responsable',
  'Conoce a nuestros voluntarios y su labor diaria',
  'Actividades divertidas para hacer con tu nueva mascota',
  'Cómo apoyar a tu refugio local de otras formas',
  'Entendiendo las necesidades de mascotas especiales',
  'El proceso de adopción: desde el refugio hasta tu hogar',
  'Cómo manejar la ansiedad de separación en mascotas adoptadas',
  'Qué hacer si encuentras una mascota perdida',
  'Los mitos y realidades sobre la adopción de gatos',
  'Consejos para la socialización de mascotas adoptadas',
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index],
  createdAt: faker.date.past(),
  view: faker.number.int({ min: 1, max: 99999 }),
  comment: faker.number.int({ min: 1, max: 99999 }),
  share: faker.number.int({ min: 1, max: 99999 }),
  favorite: faker.number.int({ min: 1, max: 99999 }),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));
