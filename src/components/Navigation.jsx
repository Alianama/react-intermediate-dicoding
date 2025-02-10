import { Link } from "react-router-dom";
import { BiArchiveIn } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { useContext } from "react";
import LocaleContext from "./context/LocaleCotext";
export function Navigation() {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="navigation-container">
      <Link className="navigate-btn" to="/">
        <ImHome size={30} />
        {locale === "id" ? "Beranda" : "Home"}
      </Link>
      <Link className="navigate-btn" to="/archive">
        <BiArchiveIn size={30} />
        {locale === "id" ? "Arsip" : "Archive"}
      </Link>
    </div>
  );
}
