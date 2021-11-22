import NavDropdown from "../NavDropdown/NavDropdown";

export default function Header({ user, handleLogout }) {
  return (
    <>
    <nav className="grid grid-cols-3 text-2xl text-black bg-primary font-theme">
      <div>
        <a href="/search" className="flex justify-start items-center underline">
          Start Reading
        </a>
      </div>
      <div className=" flex justify-center items-center">
        <a href="/">Home</a>
      </div>
      <div className="flex items-center">
        {user ? (
          <NavDropdown user={user} handleLogout={handleLogout} />
        ) : (
          <div className="flex justify-end">
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
    <br/>
    <br/>
    </>
  );
}
