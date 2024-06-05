import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">NatureGram</Link>
      <Link to="/createNew">Create New</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
