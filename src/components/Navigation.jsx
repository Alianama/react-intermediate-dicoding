import { Link } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { ImHome } from "react-icons/im";

export function Navigation() {
  return (
    <div className="navigation-container">
      <Link className="navigate-btn" to="/">
        <ImHome size={30} />
        Home
      </Link>
      <Link className="navigate-btn" to="/archive">
        <BiArchiveIn size={30} />
        Archive
      </Link>
    </div>
  );
}
