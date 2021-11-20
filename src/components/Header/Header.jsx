export default function Header({ user, handleLogout }) {
  return (
    <nav class="text-2xl text-white bg-black">
      <a href="/" class="flex self-auto">Home</a>
      &nbsp;
      <a href="/search">Start Reading</a>
      &nbsp;
      <span class="float-right">
        {user ? (
          <span>
            <a href="">
              {/* <button>{user.username.split(" ")[0][0]}</button> */}
              <button>{user.username}</button>
            </a>
            &nbsp;
            <a href="/saved">My Saved Verses</a>
            &nbsp;
            <a href="/logout" onClick={handleLogout}>
              Log Out
            </a>
          </span>
        ) : (
          <span>
            <a href="/login">Log In</a>
            &nbsp;
            <a href="/signup">Sign Up</a>
          </span>
        )}
      </span>
    </nav>
  );
}
