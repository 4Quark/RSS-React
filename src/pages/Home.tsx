import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <p>
        Create youre character with <Link to="/uncontrolled_form">Uncontrolled Form</Link> or with{' '}
        <Link to="/hook_form">React Hook Form</Link>
      </p>
      <div>Results</div>
    </>
  );
}

export default Home;
