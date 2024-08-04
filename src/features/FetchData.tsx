/**
 *
 * An example page to show how to fetch data from an api and populate it in a list
 *
 */

import { useEffect, useState } from 'react';
import { type Person } from 'types/Person';

const FetchData = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/persons')
      .then((response) => response.json())
      .then((data) => {
        setPersons(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Fetching Data From DB...</p>;
  }

  return (
    <div className='m-4'>
      <ul>
        {persons?.map((person) => {
          return (
            <li
              key='person.personId'
              className='text-xl text-blue-800'
            >
              {person.firstName} {person.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchData;
