import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
    'Rocky', 'Gato', 'Luna', 'Max', 'Milo', 'Lucy', 
    'Oliver', 'Sophie']),
  company: sample(['Perro', 'Gato']),
  isVerified: sample(['Si', 'No']),
  status: sample(['activo', 'banned']),
  role: sample([
    'Si',
    'No',
    
  ]),
}));
