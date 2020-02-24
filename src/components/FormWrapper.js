import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      marginBottom: '20px !important',
    },
  },
}));

export default function FormWrapper({
  handleSubmit,
  validationSchema,
  children,
  initialValues,
  ...props
}) {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
      {...props}
    >
      {props => {
        return (
          <Form className={classes.form} onSubmit={e => props.handleSubmit(e)}>
            {children}
          </Form>
        );
      }}
    </Formik>
  );
}

FormWrapper.propTypes = {
  handleSubmit: PropTypes.func,
  validationSchema: PropTypes.object,
  children: PropTypes.node,
  initialValues: PropTypes.object,
};
