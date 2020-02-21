import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

export default function EnhancedTableHead({
  cells,
  orderBy,
  order,
  onRequestSort,
}) {
  const sortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {cells.map(cell => (
          <TableCell
            key={cell}
            sortDirection={orderBy === cell ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell}
              direction={orderBy === cell ? order : 'asc'}
              onClick={sortHandler(cell)}
            >
              <span style={{ textTransform: 'uppercase' }}>{cell}</span>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
