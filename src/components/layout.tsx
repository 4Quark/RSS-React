import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header>
        <h1 className="logo">React.Form</h1>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/uncontrolled_form">UncontrolledForm</NavLink>
          <NavLink to="/hook_form">ReactHookForm</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
