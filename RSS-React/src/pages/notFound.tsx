import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <h1>Ooops!</h1>
      <p>This page not exist</p>
      <Link to="/">go to Home</Link>
    </>
  );
}
