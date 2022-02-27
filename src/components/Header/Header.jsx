import NavDropdown from "../NavDropdown/NavDropdown";
import BibleLogo from "../BibleLogo/BibleLogo";

export default function Header({ user, handleLogout }) {
  return (
    <>
      <nav className="grid grid-cols-3 h-24 text-2xl text-theme-dark bg-blue-500 font-theme font-bold">
        <div>
          <a href="/search" className="object-left underline">
            Start Reading
          </a>
        </div>
        <div className=" flex justify-center items-center">
          <a href="/">
            {/* <BibleLogo /> */}
          </a>
        </div>
        <div className="relative text-right">
          {user ? (
            <NavDropdown user={user} handleLogout={handleLogout} />
          ) : (
            <div>
              <a href="/login" className="mr-4 underline">
                Log In
              </a>
              <a href="/signup" className="underline">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </nav>
      <br />
      <br />
    </>
  );
}
