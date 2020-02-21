import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '100px',
  },
  paper: {
    padding: '20px',
  },
  gridItem: {
    display: 'flex',
    flexGrow: '1',
    '& > div': {
      width: '100%',
    },
  },
}));

export default function Layout({ form, table }) {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.container} container spacing={1}>
        <Grid item md={4}>
          <Paper className={classes.paper}>{form}</Paper>
        </Grid>
        <Grid className={classes.gridItem} item md={8}>
          <Paper className={classes.paper}>{table}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
