import React, { useContext } from "react";

import LocaleContext from "./context/LocaleCotext";

function Header() {
  const { locale, toggleLocale, theme, toggleTheme } =
    useContext(LocaleContext);
  return (
    <div className="header-container">
      <div className="title">
        <h1>{locale === "id" ? "Aplikasi Catatan" : "Notes App"}</h1>
      </div>
      <button className="locale-btn" onClick={toggleLocale}>
        {locale === "id" ? "English" : "Indonesia"}
      </button>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}

export default Header;
