import React, { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import NotesList from "./pages/NotesListActive";
import NotesListArchive from "./pages/NotesListArchive";
import NotesDetail from "./pages/NotesDetail";
import Add from "./pages/AddNotes";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import LocaleContext from "./context/LocaleContext";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [authedUser, setAuthedUser] = useState(
    localStorage.getItem("authedUser") || null
  );

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    localStorage.setItem("authedUser", data);
    setAuthedUser(data);
    localStorage.setItem("name", data.name);
    setName(data.name);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const logout = () => {
    putAccessToken("");
    localStorage.removeItem("authedUser");
    setAuthedUser(null);
  };

  const contextValue = useMemo(() => {
    return { locale, toggleLocale, theme, toggleTheme };
  }, [locale, theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  if (authedUser === null) {
    return (
      <LocaleContext.Provider value={contextValue}>
        <div className="contact-app">
          <header className="contact-app__header">
            <h1>{locale === "id" ? "Aplikasi Kontak" : "Contact App"}</h1>
          </header>
          <main>
            <Routes>
              <Route
                path="/*"
                element={<Login loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={contextValue}>
      <div className="app-container">
        <Header name={name} logout={logout} />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/archive" element={<NotesListArchive />} />
            <Route path="/detail/:id" element={<NotesDetail />} />
            <Route path="/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
