import { faker } from '@faker-js/faker';
import { primaryKey } from '@mswjs/data';
import { PrimaryKey } from '@mswjs/data/lib/primaryKey';
import { addRandomNulls } from './helpers.ts';

//let phoneTypes = faker.helpers.arrayElement(['cat', 'dog', 'mouse']) // 'dog'
enum phoneTypes {
  Home,
  Business,
  Mobile,
}

export type Person = {
  id: PrimaryKey<any>;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
  age: number;
  approvalDate: string;
  isActive: string;
  latitude: number;
  longitude: number;
};

export const PersonModel = {
  id: primaryKey(() => faker.string.uuid()),
  firstName: () => faker.person.firstName(),
  lastName: () => faker.person.lastName(),
  jobTitle: () => faker.helpers.maybe(() => faker.person.jobTitle(), { probability: 0.9 }),
  organization: () => faker.helpers.maybe(() => faker.company.name(), { probability: 0.9 }),
  avatar: () => faker.image.avatar(),
  emails: () => [
    faker.helpers.maybe(() => faker.internet.email(), { probability: 0.9 }),
    addRandomNulls(faker.internet.email(), 100),
    addRandomNulls(faker.internet.email(), 100),
  ],
  phoneNumbers: () => {
    return faker.helpers.multiple(() => {
      return {
        phone: faker.phone.number('(###) ###-###'),
        type: faker.helpers.enumValue(phoneTypes),
      };
    });
  },
  address: () => faker.location.streetAddress(),
  zipCode: () => faker.location.zipCode(),
  city: () => faker.location.city(),
  state: () => faker.location.state(),
  country: () => faker.location.country(),
  age: () => faker.number.int({ min: 0, max: 100 }),
  approvalDate: () => faker.date.past({ years: 1 }).toDateString(),
  isActive: () => (faker.datatype.boolean() ? 'Active' : 'Inactive'),
  latitude: () =>
    faker.location.latitude({
      max: 50,
      min: 30,
    }),
  longitude: () =>
    faker.location.longitude({
      max: -90,
      min: -120,
    }),
};
