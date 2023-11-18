import { NavLink, Outlet } from 'react-router-dom';
import RMLogo from './../assets/RMLogo.png';

function Layout() {
  return (
    <>
      <header>
        <img className="RMLogo" src={RMLogo} alt="Rick and Morty" />
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search/1">Search</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
