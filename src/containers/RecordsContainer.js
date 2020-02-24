import React from 'react';
import { useFormContext } from '../context/FormContext';
import SortedTable from '../components/SortedTable';
import { getUniqueKeys } from '../utils/getUniqueKeys';
import EmptyTable from '../components/EmptyTable';

export default function RecordsContainer() {
  const { formData, deletePerson } = useFormContext();
  const isEmpty = formData && formData.length === 0;

  return !isEmpty ? (
    <SortedTable
      cells={getUniqueKeys(formData, ['id'])}
      data={formData}
      onDelete={id => deletePerson(id)}
    />
  ) : (
    <EmptyTable />
  );
}
