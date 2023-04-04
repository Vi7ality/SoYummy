import * as Yup from 'yup';

import { nameRegExp, emailRegExp, notSecurePasswordRegExp } from './regExp';

const authValidationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .matches(nameRegExp, 'Name must contain only letters'),
  email: Yup.string()
    .required('Email is required')
    .matches(emailRegExp, 'Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .matches(notSecurePasswordRegExp, 'Enter a valid Password'),
});

export default authValidationSchema;
