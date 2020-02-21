import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function Select({ options, ...props }) {
  const [field, meta] = useField(props);
  return (
    <TextField
      select
      error={!!meta.touched && !!meta.error}
      size="small"
      helperText={meta.error}
      variant="outlined"
      {...field}
      {...props}
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
