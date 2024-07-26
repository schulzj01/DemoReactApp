import { factory } from '@mswjs/data';
import { PersonMockModel } from './models/PersonMockModel';

export const mockDb = factory({
  person: PersonMockModel,
});
