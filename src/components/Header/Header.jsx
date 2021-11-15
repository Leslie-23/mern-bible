export default function Header(props) {
  return (
    <nav>
      <p>{props.user ? `Hello, ${props.user.name}` : ""}</p>
      <a href="/">Home</a>
      <a href="/search">Search</a>
      <a href="/login">Log In</a>
      <a href="/signup">Sign Up</a>
      <a href="/logout" onClick={props.handleLogout}>Log Out</a>
    </nav>
  );
}
