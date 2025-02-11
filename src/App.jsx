import React, { useState, useMemo, useEffect } from "react";
import Header from "./components/header";
import NotesList from "./pages/NotesListActive";
import NotesListArchive from "./pages/NotesListArchive";
import NotesDetail from "./pages/NotesDetail";
import Add from "./pages/AddNotes";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import LocaleContext from "./context/LocaleContext";

function App() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const contextValue = useMemo(() => {
    return { locale, toggleLocale, theme, toggleTheme };
  });

  useEffect(() => {
    const updateTheme = () => {
      document.documentElement.setAttribute("data-theme", theme);
    };
    updateTheme();
  }, [theme]);

  return (
    <LocaleContext.Provider value={contextValue}>
      <div className="app-container">
        <Header />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<NotesList />} />
            <Route path="/archive" element={<NotesListArchive />} />
            <Route path="/detail/:id" element={<NotesDetail />} />
            <Route path="/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />{" "}
          </Routes>
        </main>
      </div>
    </LocaleContext.Provider>
  );
}

export default App;
