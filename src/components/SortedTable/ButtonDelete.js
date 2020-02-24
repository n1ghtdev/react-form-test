import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  delete: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'opacity 250ms',
    '&:hover, &:focus': {
      opacity: '.7',
      outline: 'none',
    },
  },
}));

export default function ButtonDelete({ onClick }) {
  const styles = useStyles();
  return (
    <button className={styles.delete} onClick={onClick}>
      <CancelIcon />
    </button>
  );
}

ButtonDelete.propTypes = {
  onClick: PropTypes.func,
};
