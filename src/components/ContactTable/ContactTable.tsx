import { useMemo, useEffect, useState } from 'react';
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef, type MRT_RowSelectionState } from 'material-react-table';

type Props = {
  persons: object[]
  handleTableChange: Function
};

const ContactTable = ({ persons, handleTableChange }: Props) => {
  // const [persons, setPersons] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // The use of .toString here seems sus, but the reasoning is because filtering has issues if the string value is null.
  // See https://github.com/KevinVandy/material-react-table/issues/315
  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorFn: row => `${row.firstName} ${row.lastName}`.toString(),
        accessorKey: 'firstName',
        header: 'Name',
      },
      {
        accessorFn: row => (row.jobTitle ? `${row.jobTitle}`.toString() : ''),
        header: 'Position/Job Title',
      },
      {
        accessorFn: row => (row.organization ? `${row.organization}`.toString() : ''),
        header: 'Organization',
      },
      {
        accessorFn: row => (row.phoneNumbers[0]?.phone ? `${row.phoneNumbers[0]?.phone}`.toString() : ''),
        header: 'Primary Phone',
      },
      {
        accessorFn: () => '',
        header: 'Slack',
      },
    ],
    [],
  );
  let data = persons;

  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>({});

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    positionGlobalFilter: 'right', // show the global filter on the left side of the top toolbar
    initialState: {
      showGlobalFilter: true, // show the global filter by default
      density: 'compact', // start us off nice and compact
    },
    globalFilterFn: 'contains', // turn off fuzzy matching and use simple contains filter function
    enablePagination: false,
    enableStickyHeader: true,
    enableRowVirtualization: true,
    layoutMode: 'grid',
    muiTableContainerProps: { sx: { maxHeight: 'calc(100% - 3.5em)' } },
    muiTablePaperProps: { sx: { width: '100%' } },
    state: {
      isLoading: false,
      rowSelection,
    },
    onRowSelectionChange: setRowSelection, // connect internal row selection state to your own
    muiCircularProgressProps: {
      color: 'secondary',
      thickness: 5,
      size: 55,
    },
    //    onGlobalFilterChange: setFilterSelection,
  });

  useEffect(() => {
    let rowData = {
      selected: [],
      displayed: [],
    };
    table.getRowModel().rows.forEach((row) => {
      if (row.getIsSelected()) rowData.selected.push(row.original.id);
      rowData.displayed.push(row.original.id);
    });
    handleTableChange(rowData);
  }, [table.getState().rowSelection, table.getRowModel()]);

  return <MaterialReactTable table={table} />;
};

export default ContactTable;
