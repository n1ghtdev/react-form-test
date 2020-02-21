import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import EnhancedTableHead from './TableHead';

export default function SortedTable({ cells, data }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState(cells[0]);

  const onRequestSort = React.useCallback(
    (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    },
    [order, orderBy],
  );

  return (
    <TableContainer>
      <Table>
        <EnhancedTableHead
          cells={cells}
          onRequestSort={onRequestSort}
          orderBy={orderBy}
          order={order}
        />
        <TableBody>
          {data.map((row, idx) => (
            <TableRow>
              {cells.map(key => (
                <TableCell>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
