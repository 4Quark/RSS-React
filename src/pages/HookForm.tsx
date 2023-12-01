import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/store';
import { tilesSlice } from '../store/tilesReducer';
import { useNavigate } from 'react-router-dom';

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

function ReactHookForm() {
  const { register, handleSubmit, setValue } = useForm<formData>();
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
      <form onSubmit={onSubmit}>
        <label>
          Name: <input {...register('name')} />
        </label>

        <label>
          Age: <input type="number" {...register('age')} />
        </label>

        <label>
          email: <input type="text" {...register('email')} />
        </label>

        <label>
          Password: <input type="password" {...register('password')} />
        </label>

        <label>
          Repeat password: <input type="password" {...register('passwordRepeat')} />
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
          <input type="checkbox" {...register('accept')} /> accept T&C
        </label>

        <label>
          Add file: <input type="file" {...register('file')} />
        </label>

        <label>
          Choose your country
          <select {...register('country')}>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Spain">Spain</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ReactHookForm;
