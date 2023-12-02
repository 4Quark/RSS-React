import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/store';
import { tilesSlice } from '../store/tilesReducer';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type formData = {
  accept: boolean;
  age: number;
  country: string;
  email: string;
  file: FileList;
  gender: string;
  name: string;
  password: string;
  passwordRepeat: string;
};

const schema = yup.object().shape({
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
  passwordRepeat: yup.string().required('repeat password is required'),
  country: yup.string().required(),
  file: yup
    .mixed()
    .test('required', 'You need to provide a file', (file) => {
      if (file) return true;
      return false;
    })
    .required('file is required'),
  accept: yup
    .boolean()
    .oneOf([true], 'you must accept the terms and conditions')
    .required('please read terms and conditions'),
});

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formData>({ resolver: yupResolver(schema) });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pushTile } = tilesSlice.actions;

  const onSubmit = handleSubmit((data) => {
    dispatch(pushTile(data));
    navigate('/');
  });

  const autocomplete = () => {
    setValue('name', 'Polite Marshmallow');
    setValue('age', 24);
    setValue('email', 'polite_marshmallow@react.com');
    setValue('password', 'Primary_1');
    setValue('passwordRepeat', 'Primary_1');
    setValue('country', 'Belarus');
  };

  return (
    <>
      <h2>React Hook Form</h2>
      <button onClick={autocomplete}>Autocomplete</button>
      <div className="form_container">
        <form onSubmit={onSubmit}>
          <label>
            Name: <input {...register('name')} />
            {errors.name && <i>{errors.name.message}</i>}
          </label>

          <label>
            Age: <input type="number" {...register('age')} />
            {errors.age && <i>{errors.age.message}</i>}
          </label>

          <label>
            email: <input type="text" {...register('email')} />
            {errors.email && <i>{errors.email.message}</i>}
          </label>

          <label>
            Password: <input type="password" {...register('password')} />
            {errors.password && <i>{errors.password.message}</i>}
          </label>

          <label>
            Repeat password: <input type="password" {...register('passwordRepeat')} />
            {errors.passwordRepeat && <i>{errors.passwordRepeat.message}</i>}
          </label>

          <label>
            Gender:
            <label>
              <input type="radio" value="male" defaultChecked {...register('gender')} />
              male
            </label>
            <label>
              <input type="radio" value="female" {...register('gender')} />
              female
            </label>
          </label>

          <label>
            Add file: <input type="file" {...register('file')} />
            {errors.file && <i>{errors.file.message}</i>}
          </label>

          <label>
            Choose your country
            <select {...register('country')}>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
              <option value="Spain">Spain</option>
            </select>
          </label>

          <label className="terms_and_condidions">
            <input type="checkbox" {...register('accept')} /> I agree to the terms and conditions as set out
            by the user agreement
            {errors.accept && <i>{errors.accept.message}</i>}
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default ReactHookForm;
