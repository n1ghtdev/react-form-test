import React from 'react';
import Button from '@material-ui/core/Button';
import FormWrapper from '../components/FormWrapper';
import Input from '../components/inputs/Input';
import Select from '../components/inputs/Select';
import { useFormContext } from '../context/FormContext';
import { userValidationSchema } from '../utils/userValidationSchema';

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  gender: '',
  age: '',
};

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

export default function FormContainer() {
  const { addPerson } = useFormContext();

  function handleSubmit(values, action) {
    addPerson(values);
  }

  return (
    <FormWrapper
      initialValues={initialValues}
      handleSubmit={handleSubmit}
      validationSchema={userValidationSchema}
    >
      <Input name="firstName" label="First name" />
      <Input name="lastName" label="Last name" />
      <Input type="tel" name="phone" label="Phone number" />
      <Select name="gender" label="Gender" options={genderOptions} />
      <Input
        type="number"
        inputProps={{ min: '0', max: '122' }}
        name="age"
        label="Age"
      />
      <Button type="submit" color="primary" variant="contained">
        Submit
      </Button>
    </FormWrapper>
  );
}
