import { useRef, useState } from 'react';
import { useAppDispatch } from '../services/store';
import { useNavigate } from 'react-router-dom';
import { tilesSlice } from '../services/tilesReducer';
import { schema } from '../services/schema';
import { ValidationError } from 'yup';

function UncontrolledForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pushTile } = tilesSlice.actions;
  const [errors, setErrors] = useState<string[]>([]);
  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formGender = genderRefMale.current?.checked ? 'male' : 'female';

    if (
      acceptRef.current &&
      ageRef.current &&
      countryRef.current &&
      maleRef.current &&
      fileRef.current &&
      fileRef.current.files &&
      nameRef.current &&
      passwordRef.current &&
      passwordDoubleRef.current
    ) {
      const data = {
        accept: acceptRef.current.checked,
        age: +ageRef.current.value,
        country: countryRef.current.value,
        email: maleRef.current.value,
        file: fileRef.current.files,
        gender: formGender,
        name: nameRef.current.value,
        password: passwordRef.current.value,
        confirmPassword: passwordDoubleRef.current.value,
      };
      try {
        schema.validateSync(data, { abortEarly: false });
        dispatch(pushTile(data));
        navigate('/');
      } catch (e) {
        if (e instanceof ValidationError) {
          setErrors(e.errors);
        }
      }
    }
  };
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordDoubleRef = useRef<HTMLInputElement>(null);
  const genderRefMale = useRef<HTMLInputElement>(null);
  const genderRefFemale = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const autocomplete = () => {
    if (nameRef.current) nameRef.current.value = 'Polite Marshmallow';
    if (ageRef.current) ageRef.current.value = '24';
    if (maleRef.current) maleRef.current.value = 'polite_marshmallow@react.com';
    if (passwordRef.current) passwordRef.current.value = 'Primary*1';
    if (passwordDoubleRef.current) passwordDoubleRef.current.value = 'Primary*1';
    if (countryRef.current) countryRef.current.value = 'Belarus';
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <button onClick={autocomplete}>Autocomplete</button>
      <div className="form_container">
        <form onSubmit={handleForm} className="form_uncontrolled">
          <label>
            Name: <input type="text" name="name" ref={nameRef} />
            {errors.includes('first letter must be uppercased') && <i>first letter must be uppercased</i>}
            {errors.includes('name is a required field') && <i>name is a required field</i>}
          </label>

          <label>
            Age: <input type="number" name="age" ref={ageRef} />
            {errors.includes('age is a required field') && <i>age is a required field</i>}
            {errors.includes('age must be positive') && <i>age must be positive</i>}
            {errors.includes('age must be integer') && <i>age must be integer</i>}
          </label>

          <label>
            email: <input type="email" name="male" ref={maleRef} />
            {errors.includes('email is required') && <i>email is required</i>}
          </label>

          <label>
            Password: <input type="password" name="password" ref={passwordRef} />
            {errors.includes('password is required') && <i>password is required</i>}
            {errors.includes('at least 6 character') && <i>at least 6 character</i>}
            {errors.includes('at least 1 lowercased letter') && <i>at least 1 lowercased letter</i>}
            {errors.includes('at least 1 uppercased letter') && <i>at least 1 uppercased letter</i>}
            {errors.includes('at least 1 number') && <i>at least 1 number</i>}
            {errors.includes('at least 1 special character') && <i>at least 1 special character</i>}
          </label>

          <label>
            Repeat password: <input type="password" name="passwordDouble" ref={passwordDoubleRef} />
            {errors.includes('passwords don`t mutch') && <i>passwords don`t mutch</i>}
            {errors.includes('confirm password is required') && <i>confirm password is required</i>}
          </label>

          <label>
            Gender:
            <input type="radio" name="gender" defaultChecked ref={genderRefMale} /> male
            <input type="radio" name="gender" ref={genderRefFemale} /> female
          </label>

          <label>
            Add file: <input type="file" name="file" ref={fileRef} required />
            {errors.includes('you need to provide a file') && <i>you need to provide a file</i>}
            {errors.includes('file is required') && <i>file is required</i>}
          </label>

          <label>
            Choose your country
            <select ref={countryRef}>
              <option value="Russia">Russia</option>
              <option value="Belarus">Belarus</option>
            </select>
          </label>

          <label className="terms_and_condidions">
            <input type="checkbox" name="accept" ref={acceptRef} /> I agree to the terms and conditions as set
            out by the user agreement.
            {errors.includes('you must accept the terms and conditions') && (
              <i>you must accept the terms and conditions</i>
            )}
            {errors.includes('please read terms and conditions') && <i>please read terms and conditions</i>}
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default UncontrolledForm;
