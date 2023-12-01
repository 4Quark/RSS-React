import { useRef } from 'react';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { tilesSlice } from '../store/tilesReducer';

function UncontrolledForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pushTile } = tilesSlice.actions;
  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formGender = genderRefMale.current?.checked ? 'male' : 'female';
    console.log(fileRef.current?.files);
    if (
      acceptRef.current &&
      ageRef.current &&
      countryRef.current &&
      maleRef.current &&
      fileRef.current &&
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
        passwordRepeat: passwordDoubleRef.current.value,
      };
      dispatch(pushTile(data));
    }
    navigate('/');
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
    if (passwordRef.current) passwordRef.current.value = 'Primary_1';
    if (passwordDoubleRef.current) passwordDoubleRef.current.value = 'Primary_1';
    if (countryRef.current) countryRef.current.value = 'Belarus';
  };

  return (
    <>
      <h2>Uncontrolled Form</h2>
      <button onClick={autocomplete}>Autocomplete</button>
      <form onSubmit={handleForm} className="form_uncontrolled">
        <label>
          Name: <input type="text" name="name" ref={nameRef} />
        </label>

        <label>
          Age: <input type="number" name="age" ref={ageRef} />
        </label>

        <label>
          email: <input type="email" name="male" ref={maleRef} />
        </label>

        <label>
          Password: <input type="text" name="password" ref={passwordRef} />
        </label>

        <label>
          Repeat password: <input type="text" name="passwordDouble" ref={passwordDoubleRef} />
        </label>

        <label>
          Gender:
          <input type="radio" name="gender" defaultChecked ref={genderRefMale} /> male
          <input type="radio" name="gender" ref={genderRefFemale} /> female
        </label>

        <label>
          <input type="checkbox" name="accept" ref={acceptRef} /> accept T&C
        </label>

        <label>
          Add file: <input type="file" name="file" ref={fileRef} />
        </label>

        <label>
          Choose your country
          <select ref={countryRef}>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default UncontrolledForm;
