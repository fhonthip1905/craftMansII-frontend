import "../main";
import UserIcon from "./icons/usericon";
import Logo from "./logo";

export default function Header() {
  return (
    <nav className="navbar outter navbar-expand-lg">
      <div className="container-inner">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Logo />
          </div>
          <div className="icon-user">
            <UserIcon/>
          </div>
        </div>
      </div>
    </nav>
  );
}
