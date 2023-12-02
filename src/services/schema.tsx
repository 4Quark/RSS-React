import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-ZА-Я][a-zа-яё]+(\s[A-ZА-Я][a-zа-яё]+)*$/, 'first letter must be uppercased')
    .required('name is a required field'),
  age: yup
    .number()
    .required('age is a required field')
    .positive('age must be positive')
    .integer('age must be integer'),
  email: yup.string().email().required('email is required'),
  gender: yup.string().required(),
  password: yup
    .string()
    .required('password is required')
    .min(6, 'at least 6 character')
    .matches(/(.*[a-z].*)/, 'at least 1 lowercased letter')
    .matches(/(.*[A-Z].*)/, 'at least 1 uppercased letter')
    .matches(/(.*[0-9].*)/, 'at least 1 number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'at least 1 special character'),
  // confirmPassword: yup.string().required('repeat password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords don`t mutch')
    .required('confirm password is required'),
  country: yup.string().required(),
  file: yup
    .mixed()
    .test('required', 'you need to provide a file', (file) => {
      if (file) return true;
      return false;
    })
    .required('file is required'),
  accept: yup
    .boolean()
    .oneOf([true], 'you must accept the terms and conditions')
    .required('please read terms and conditions'),
});
