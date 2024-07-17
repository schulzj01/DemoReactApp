import { useEffect, useState } from 'react';
import { type Person } from 'mocks/models/Person.ts';

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
    <>
      <ul>
        {persons?.map((person) => {
          return (
            <li className='text-xl text-blue-800'>
              {person.firstName} {person.lastName}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchData;
