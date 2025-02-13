import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import LocaleContext from "../context/LocaleContext";
import PropTypes from "prop-types";

function Header({ logout, name }) {
  const { locale, toggleLocale, theme, toggleTheme } =
    useContext(LocaleContext);
  return (
    <div className="header-container">
      <div className="title">
        <h1>{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
      </div>
      <div className="header-btn-wrapper">
        <button className="locale-btn" onClick={toggleLocale}>
          {locale === "id" ? "English" : "Indonesia"}
        </button>
        <div className="theme-btn " onClick={toggleTheme}>
          {theme === "light" ? (
            <MdDarkMode size={40} />
          ) : (
            <MdLightMode size={40} />
          )}
        </div>
        <h2>{name}</h2>
        <div onClick={logout}>{!logout ? "" : <IoMdLogOut size={40} />}</div>
      </div>
    </div>
  );
}

Header.propTypes = {
  logout: PropTypes.func,
  name: PropTypes.string,
};

export default Header;
