/**
 *
 *  A page to display a list of contacts in both a table and map
 *
 */
import { useState, useEffect, useRef } from 'react';
import ContactTable from '@/components/ContactTable/ContactTable';
import Map from 'components/Map/Map';
import Box from '@mui/material/Box';

import { Person } from '@/mocks/models/Person.ts';
import apis from 'routes/apis';

interface SelectablePerson extends Person {
  isSelected: boolean;
  isDisplayed: boolean;
}

type RowData = {
  selected: string[];
  displayed: string[];
};

function Contacts() {
  const [persons, setPersons] = useState<SelectablePerson[]>([]);
  //const [selected, setSelected]=useState({});

  const handleTableChange = (rowData: RowData) => {
    setPersons((prevPersons) => {
      let updatePersons = [...prevPersons];
      updatePersons.forEach((person, key) => {
        person.isSelected = rowData.selected.includes(person.id);
        person.isDisplayed = rowData.displayed.includes(person.id);
      });
      return updatePersons;
    });
  };

  useEffect(() => {
    fetch(apis.persons)
      .then((response) => response.json())
      .then((data: SelectablePerson[]) => {
        //Add a property into our data that allows us to monitor the selection in the table.
        let selectablePersons = data.map((obj) => ({ ...obj, isSelected: false, isDisplayed: true }));
        setPersons(selectablePersons);
      });
  }, []);

  return (
    <>
      <Box sx={{ height: '100%' }}>
        <Box sx={{ flexGrow: 1, height: '55%' }}>
          <Map persons={persons} />
        </Box>
        <Box sx={{ display: 'flex', height: '45%' }}>
          <ContactTable
            persons={persons}
            handleTableChange={handleTableChange}
          />
        </Box>
      </Box>
    </>
  );
}

export default Contacts;
