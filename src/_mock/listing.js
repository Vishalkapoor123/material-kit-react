import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const listings = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  from: faker.location.country(),
  to: faker.location.country(),
  comments: faker.lorem.slug(),
  email: faker.email,
  contact: faker.phone.number()
}));
