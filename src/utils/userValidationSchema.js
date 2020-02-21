import * as Yup from 'yup';
import { phoneRegExp } from '../utils/phoneRegExp';

export const userValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please enter your phone number'),
  gender: Yup.string().required('Please select your gender'),
  age: Yup.string().required('Please enter your age'),
});
