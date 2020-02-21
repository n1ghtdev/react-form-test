import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  empty: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ddd',
    fontSize: '32px',
    fontWeight: 'bold',
  },
}));

export default function EmptyTable() {
  const classes = useStyles();
  return <div className={classes.empty}>Empty</div>;
}
