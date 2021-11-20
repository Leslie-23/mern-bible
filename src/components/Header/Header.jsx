export default function Header({ user, handleLogout }) {
  return (
    <nav>
      <a href="/">Home</a>
      &nbsp;
      <a href="/search">Start Reading</a>
      &nbsp;
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
    </nav>
  );
}
