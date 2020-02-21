import React from 'react';
import { useFormContext } from '../FormContext';
import SortedTable from '../components/SortedTable';
import { getUniqueKeys } from '../utils/getUniqueKeys';
import EmptyTable from '../components/EmptyTable';

export default function RecordsContainer() {
  const { formData } = useFormContext();
  const isEmpty = formData && formData.length === 0;

  return !isEmpty ? (
    <SortedTable cells={getUniqueKeys(formData)} data={formData} />
  ) : (
    <EmptyTable />
  );
}
