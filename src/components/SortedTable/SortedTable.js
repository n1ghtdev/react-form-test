import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import EnhancedTableHead from './TableHead';
import { stableSort, getComparator } from '../../utils/stableSort';

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
    <TableContainer style={{ height: '100%' }}>
      <Table stickyHeader>
        <EnhancedTableHead
          cells={cells}
          onRequestSort={onRequestSort}
          orderBy={orderBy}
          order={order}
        />
        <TableBody>
          {stableSort(data, getComparator(order, orderBy)).map((row, idx) => (
            // don't use index for keys especially with sorting
            <TableRow key={idx}>
              {cells.map(key => (
                <TableCell key={row[key]}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

SortedTable.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.array,
};
