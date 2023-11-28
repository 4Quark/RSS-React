import { useRef } from 'react';

function UncontrolledForm() {
  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
    console.log(ageRef.current?.value);
    console.log(maleRef.current?.value);
    console.log(passwordRef.current?.value);
    console.log(passwordDoubleRef.current?.value);
    console.log(genderRefMale.current?.checked);
    console.log(genderRefFemale.current?.checked);
    console.log(acceptRef.current?.checked);
    console.log(fileRef.current?.value);
    console.log(countryRef.current?.value);
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

  return (
    <>
      <h2>Uncontrolled Form</h2>
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
          <input type="radio" name="gender" ref={genderRefMale} /> male
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
