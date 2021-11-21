import NavDropdown from "../NavDropdown/NavDropdown";

export default function Header({ user, handleLogout }) {
  return (
    <nav className="p-4 grid grid-cols-3 text-2xl text-black bg-primary font-theme">
      <div>
        <a href="/search" className="float-left my-4 underline">
          Start Reading
        </a>
      </div>
      <div className=" flex justify-center my-4">
        <a href="/">Home</a>
      </div>
      <div className="my-4">
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
  );
}
