import "../main";
import UserIcon from "./icons/usericon";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  return (
    <nav className="navbar outter navbar-expand-lg">
      <div className="container-inner">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Logo />
          </div>
          <div className="nav-rigth">
            <div className="icon-user">
              <UserIcon />
            </div>
            <div className="icon-user">
              <Button bg={"btn-yellow-02"}>Fhonthip</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
