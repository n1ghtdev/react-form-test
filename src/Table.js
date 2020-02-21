import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { useFormContext } from './FormContext';

const head = ['firstName', 'lastName', 'phone', 'gender', 'age'];

export default function TableResult() {
  const { formData } = useFormContext();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('firstName');

  const onRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {head.map(cell => (
              <TableCell
                key={cell}
                sortDirection={orderBy === cell ? order : false}
              >
                <TableSortLabel
                  active={orderBy === cell}
                  direction={orderBy === cell ? order : 'asc'}
                  onClick={createSortHandler(cell)}
                >
                  {cell}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {formData.map(row => (
            <TableRow>
              <TableCell component="th">{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
