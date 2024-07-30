import { faker } from '@faker-js/faker';
import { primaryKey } from '@mswjs/data';
import { PrimaryKey } from '@mswjs/data/lib/primaryKey';
import { addRandomNulls } from './helpers';

// let phoneTypes = faker.helpers.arrayElement(['cat', 'dog', 'mouse']) // 'dog'
enum phoneTypes {
  Home = 'Home',
  Business = 'Business',
  Mobile = 'Mobile',
}

import { type Person } from 'types/Person';

/**
 *  MSW data is in function format, convert our types to functions instead.
 */
type CreateFunctional<Type> = {
  [Key in keyof Type]: () => Type[Key];
};

type PersonMockModel = CreateFunctional<Person> & {
  id: PrimaryKey<any>
};
// Our mock data needs to have a primary key associated with it

export const PersonMockModel: PersonMockModel = {
  id: primaryKey(() => faker.string.uuid()),
  personId: () => faker.string.uuid(),
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
