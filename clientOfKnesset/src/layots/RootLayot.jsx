import { NavLink, Outlet } from "react-router-dom";
export default function RootLayot() {
    return (
    <div className="root-layot">
      <div className="nav-bar">
        <NavLink className={'nav-link'} to={'/'}>עמוד הבית</NavLink>
        <div className="connection-nav">
          <NavLink className={'nav-link'} to="/connection-area/login">התחברות</NavLink>
          <NavLink className={'nav-link'} to="/connection-area/register">הרשמה</NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
