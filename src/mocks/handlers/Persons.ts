import { http, HttpHandler, HttpResponse } from 'msw';
//import { STUDENTS_LIST_ROUTE_MASK } from '../mocks.constants';
import { mockDb } from 'mocks/mockDb';

//import { type Person } from 'mocks/models/Person.ts';

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
  //  let persons = [...Array(num).fill(null)].map(() => PersonModel);
  return HttpResponse.json(persons);
});

export default Persons;
