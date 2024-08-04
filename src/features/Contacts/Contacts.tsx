/**
 *
 *  A page to display a list of contacts in both a table and map
 *
 */
import Box from '@mui/material/Box';
import apis from 'app/routes/apis';
import { useEffect, useState } from 'react';
import { type Person } from 'types/Person';
import Map from './components/Map';

// Extend our person object with properties we can use to know whether or not the data is selected or displayed
type SelectablePerson = Person & {
  isSelected: boolean;
  isDisplayed: boolean;
};

type RowData = {
  selected: string[];
  displayed: string[];
};

function Contacts() {
  const [persons, setPersons] = useState<SelectablePerson[]>([]);

  const handleTableChange = (rowData: RowData) => {
    setPersons((prevPersons) => {
      let updatePersons = [...prevPersons];
      updatePersons.forEach((person: SelectablePerson) => {
        let id = String(person.personId);
        person.isSelected = rowData.selected.includes(id);
        person.isDisplayed = rowData.displayed.includes(id);
      });
      return updatePersons;
    });
  };

  useEffect(() => {
    fetch(apis.persons)
      .then((response) => response.json())
      .then((data: SelectablePerson[]) => {
        // Add a property into our data that allows us to monitor the selection in the table.
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
          {/* <ContactTable
            persons={persons}
            handleTableChange={handleTableChange}
          /> */}
        </Box>
      </Box>
    </>
  );
}

export default Contacts;
