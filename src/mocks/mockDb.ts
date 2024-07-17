import { factory } from '@mswjs/data';
import { PersonModel } from './models/Person';

export const mockDb = factory({
  person: PersonModel,
});
