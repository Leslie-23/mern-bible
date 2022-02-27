import NavDropdown from "../NavDropdown/NavDropdown";
import BibleLogoOne from "../Icons/BibleLogoOne";
import HamburgerIcon from "../Icons/HamburgerIcon";

export default function Header({ user, handleLogout }) {
  return (
    <nav className="grid grid-cols-3 mb-8 font-theme font-bold text-2xl text-theme-light bg-blue-500 ">
      <div className="flex justify-start">
        <a href="/search">
          Start Reading
        </a>
      </div>
      <div className=" flex justify-center items-center">
        <a href="/">
          <BibleLogoOne />
        </a>
      </div>
      <div className="relative">
        <NavDropdown user={user} handleLogout={handleLogout} />
      </div>
    </nav>
  );
}
