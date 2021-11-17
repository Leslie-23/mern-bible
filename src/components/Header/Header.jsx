export default function Header(props) {
  return (
    <nav>
      <a href="/">Home</a>
      &nbsp;
      <a href="/search">Start Reading</a>
      &nbsp;
      {props.user ? (
        <span>
          <a href="">
            <button>{props.user.username.split(" ")[0][0]}</button>
          </a>
          &nbsp;
          <a href="/saved">My Saved Verses</a>
          &nbsp;
          <a href="/logout" onClick={props.handleLogout}>
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
