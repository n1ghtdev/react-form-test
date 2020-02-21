import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';

export default function Input(props) {
  const [field, meta] = useField(props);
  return (
    <TextField
      error={!!meta.touched && !!meta.error}
      size="small"
      helperText={meta.error}
      variant="outlined"
      {...field}
      {...props}
    />
  );
}
