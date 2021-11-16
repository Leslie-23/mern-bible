export default function Header(props) {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/search">Search</a>
      {props.user ? (
        <a href="/logout" onClick={props.handleLogout}>
          Log Out
        </a>
      ) : (
        <div>
          <a href="/login">Log In</a>
          <a href="/signup">Sign Up</a>
        </div>
      )}
    </nav>
  );
}
