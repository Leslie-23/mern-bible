import NavDropdown from "../NavDropdown/NavDropdown"

export default function Header({ user, handleLogout }) {
  return (
    <nav class="grid grid-cols-3 text-2xl text-black bg-primary font-theme font-bold">
      <div>
        <button class="ml-4 my-4">
          <a href="/search" class="float-left">
            Start Reading
          </a>
        </button>
      </div>
      <div class=" flex flex-grow justify-center my-4">
        <a href="/">Home</a>
      </div>
      <div class="my-4">
        {user ? (
            <NavDropdown user={user} handleLogout={handleLogout}/>
        ) : (
          <div class="flex justify-end">
            <button class="mr-4">
              <a href="/login">Log In</a>
            </button>
            <button class="mr-4">
              <a href="/signup">Sign Up</a>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
