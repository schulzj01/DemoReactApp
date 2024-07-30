import { http, HttpHandler, HttpResponse } from 'msw';
import { mockDb } from 'mocks/mockDb';

/**
 * How many persons to create in the mock data
 */
const numPersons = 100;

/**
 *
 * @param {Integer} num - number of Persons to mock up.  If falsey, throw error response.
 * @returns HttpResponse -
 */
const Persons: HttpHandler = http.get('/api/persons', () => {
  // Throw a failure if the number of persons requested is falsey

  if (!numPersons) {
    return HttpResponse.error();
  }
  let persons = [];

  for (let i = 0; i < numPersons; i += 1) {
    persons.push(mockDb.person.create());
  }
  return HttpResponse.json(persons);
});

export default Persons;
