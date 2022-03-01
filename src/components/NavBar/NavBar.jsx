import NavDropdown from "../NavDropdown/NavDropdown";
import BibleLogoOne from "../Icons/BibleLogoOne";

export default function Header({ user, handleLogout }) {
  return (
    <nav className="grid grid-cols-3 mb-8 font-theme text-2xl text-theme-light">
      <div className="flex justify-start">
        <a href="/search">
          <button className="p-2 text-theme-dark bg-theme-light rounded-lg hover:bg-theme-4 transition in-expo duration-150">Start Reading</button>
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
