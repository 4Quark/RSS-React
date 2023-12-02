import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/store';
import { tilesSlice } from '../store/tilesReducer';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../services/schema';
import { formData } from '../services/types';

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
    setValue('password', 'Primary*1');
    setValue('confirmPassword', 'Primary*1');
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
            Repeat password: <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && <i>{errors.confirmPassword.message}</i>}
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
            Add file: <input type="file" {...register('file')} required />
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
