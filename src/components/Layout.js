import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    padding: '50px 0',
  },
  paper: {
    padding: '20px',
  },
  table: {
    height: '50%',
    display: 'flex',
    flexGrow: '1',
    '& > div': {
      width: '100%',
    },
  },
  '@media (min-width: 960px)': {
    table: {
      height: '100%',
    },
  },
}));

export default function Layout({ form, table }) {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.container} container spacing={1}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>{form}</Paper>
        </Grid>
        <Grid className={classes.table} item xs={12} md={8}>
          <Paper>{table}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

Layout.propTypes = {
  form: PropTypes.node,
  table: PropTypes.node,
};
